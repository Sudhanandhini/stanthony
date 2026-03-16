import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, Building2 } from 'lucide-react'

// ── Topper sheet images (place these files in src/assets/)
import topper1 from '../assets/1.jpg'
import topper2 from '../assets/2.webp'
import topper3 from '../assets/3.webp'
import topper4 from '../assets/4.webp'
import img360 from "../assets/final.png"

/* ══════════════════════════════════════════════
   STATIC DATA
══════════════════════════════════════════════ */
const slides = [
  {
    bg: 'from-navy to-maroon',
    title: "Welcome to St. Anthony's PU College",
    sub: 'A Unique Campus for Quality Education & Academic Excellence',
  },
  {
    bg: 'from-maroon to-navy',
    title: 'Educate · Empower · Explore · Excel',
    sub: 'Global Vision, Noble Mission: Born to excel as Global Leaders',
  },
  {
    bg: 'from-teal-dark to-navy',
    title: 'Special Coaching for CET, NEET & JEE',
    sub: 'Qualified, Experienced and Dedicated Staff committed to your success',
  },
]

const stats = [
  { Icon: Users,     value: 5000, suffix: '+', label: 'Students Enrolled' },
  { Icon: Award,     value: 100,  suffix: '+', label: 'Faculty Members' },
  { Icon: BookOpen,  value: 18,   suffix: '+', label: 'Anthonian Bulletins' },
  { Icon: Building2, value: 360,  suffix: '°', label: 'Under One Roof' },
]

const wheel360 = [
  { label: ['College', 'Canteen'],              color: '#e65c00', icon: '🍽️' },
  { label: ['Eco-Friendly', 'Campus'],           color: '#0288d1', icon: '🌿' },
  { label: ['Qualified &', 'Dedicated Faculty'], color: '#6a1b9a', icon: '👨‍🏫' },
  { label: ['Sports &', 'Games'],                color: '#2e7d32', icon: '⚽' },
  { label: ['CCTV', 'Surveillance'],             color: '#37474f', icon: '📷' },
  { label: ['Special Music', 'Classes'],         color: '#827717', icon: '🎵' },
  { label: ['Prayer', 'Hall'],                   color: '#1565c0', icon: '🙏' },
  { label: ['Hostel', 'Facilities'],             color: '#b71c1c', icon: '🏠' },
]

const campusVideos = [
  {
    id: 'YOUR_VIDEO_ID_1',
    thumb: '',
    title: "St Anthony's PU College, Kengeri : \"Inde...",
    channel: "Naveen D'Souza",
  },
  {
    id: 'YOUR_VIDEO_ID_2',
    thumb: '',
    title: 'Parents Review - SAPUC Kengeri, Banga...',
    channel: "St.Anthony's PU College",
  },
]

// 4 real topper sheets
const topperSheets = [
  { img: topper1, label: 'I PU – Distinctions',       year: '2024-25' },
  { img: topper2, label: 'II PU – Distinctions – 141', year: '2024-25' },
  { img: topper3, label: 'II PU – Distinctions – 143', year: '2024-25' },
  { img: topper4, label: 'II PU – Distinctions – 141', year: '2024-25' },
]

const newsItems = [
  {
    title: 'INDEPENDENCE DAY CELEBRATION',
    desc: "On the joyous occasion of 78th Independence Day, St. Anthony's PU college and Darshan College joined the hands together to celebrate the victory of unity, endurance, and determination. The programme began at 8:30 AM in the college campus with the welcome of our chief guest Prof. Dr. Gayathri Sudheer, Vice-Principal, The Oxford college of Arts and Science.",
  },
  {
    title: 'WORKSHOP ON NEET, K-CET & COMPETITIVE EXAMS',
    desc: "Success does not come overnight. It's a journey which includes perseverance and patience. St. Anthony's PU College organized a workshop for students to have a better knowledge about the NEET/K-CET & other competitive exams, on 1st August 2024. The program was conducted by Prof. Santhosh S V, a well-known Physics Lecturer.",
  },
  {
    title: 'ANTHONIAN PREMIER LEAGUE (APL) – SEASON 3',
    desc: 'The college conducted its annual inter-class cricket tournament fostering sportsmanship and team spirit among students. The event was a grand success with participation from all streams across both years.',
  },
  {
    title: 'ANNUAL SPORTS AND ATHLETICS MEET 2026',
    desc: 'District level sports and athletics meet was conducted showcasing incredible talent among our students. Several students won medals and certificates of merit at various track and field events.',
  },
]

const testimonials = [
  {
    name: 'RAMYASHREE B',
    stream: 'II PU Student',
    photo: null,
    quote:
      '"We had a very dedicated bunch of eminent lecturers; Role Model as Rev. Fr. Roshan Rosario; with their inspirational and motivational guidance, I was able to increase my aggregate results."',
  },
  {
    name: 'PAVITHRA N D',
    stream: 'II PU Student',
    photo: null,
    quote:
      '"At St. Anthony\'s PU College, there is excellent coaching, I was able to obtain 92.17% in II PU because of the constant help and support of all the faculty members and our Honourable Principal Rev. Fr. Roshan Rosario."',
  },
  {
    name: 'AKASH KUMAR',
    stream: 'I PU Student',
    photo: null,
    quote:
      '"The faculty here is exceptional. Their dedication towards students\' success and the individual attention given to each student makes St. Anthony\'s truly unique and special."',
  },
  {
    name: 'SNEHA THOMAS',
    stream: 'II PU Student',
    photo: null,
    quote:
      '"The competitive exam coaching at SAPUC is world-class. The teachers go above and beyond to ensure every student understands and excels. I cleared NEET thanks to their guidance."',
  },
]

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

/* ══════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════ */
function AnimatedCounter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const linear = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - linear, 3)
      setCount(Math.floor(eased * end))
      if (linear < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ══════════════════════════════════════════════
   360° SVG WHEEL
══════════════════════════════════════════════ */
function Wheel360() {
  const cx = 250, cy = 240, rInner = 78, rOuter = 158, rIcon = 118
  const toRad = (d) => (d * Math.PI) / 180

  function segPath(s0, e0) {
    const gap = 2.5
    const s = toRad(s0 + gap), e = toRad(e0 - gap)
    const x1 = cx + rInner * Math.cos(s), y1 = cy + rInner * Math.sin(s)
    const x2 = cx + rOuter * Math.cos(s), y2 = cy + rOuter * Math.sin(s)
    const x3 = cx + rOuter * Math.cos(e), y3 = cy + rOuter * Math.sin(e)
    const x4 = cx + rInner * Math.cos(e), y4 = cy + rInner * Math.sin(e)
    return `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)} A ${rOuter} ${rOuter} 0 0 1 ${x3.toFixed(2)} ${y3.toFixed(2)} L ${x4.toFixed(2)} ${y4.toFixed(2)} A ${rInner} ${rInner} 0 0 0 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`
  }

  function pt(deg, r) {
    const rad = toRad(deg)
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
  }

  return (
    <svg viewBox="0 0 500 480" className="w-full max-w-[480px] mx-auto">
      {wheel360.map((item, i) => {
        const s = i * 45 - 90, e = s + 45, mid = s + 22.5
        const [ix, iy] = pt(mid, rIcon)
        const [lx, ly] = pt(mid, rOuter + 30)
        return (
          <g key={i}>
            <path d={segPath(s, e)} fill={item.color} />
            <text x={ix} y={iy} textAnchor="middle" dominantBaseline="central" fontSize="22">{item.icon}</text>
            {item.label.map((line, j) => {
              const lineH = 13
              const offset = (j - (item.label.length - 1) / 2) * lineH
              return (
                <text key={j} x={lx} y={ly + offset} textAnchor="middle" dominantBaseline="central"
                  fontSize="9.5" fontWeight="700" fill="#1a1a1a" fontFamily="sans-serif">{line}</text>
              )
            })}
          </g>
        )
      })}
      <circle cx={cx} cy={cy} r={rInner - 5} fill="white" stroke="#eee" strokeWidth="1" />
      <text x={cx} y={cy - 15} textAnchor="middle" fontSize="40" fontWeight="900" fill="#e53935" fontFamily="sans-serif">360°</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="11" fill="#555" fontFamily="sans-serif">Under one roof</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════
   YOUTUBE VIDEO CARD
══════════════════════════════════════════════ */
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm">
      {playing ? (
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="relative aspect-video cursor-pointer group" onClick={() => setPlaying(true)}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Video Thumbnail</span>
          </div>
          {video.thumb && (
            <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-10 bg-red-600 rounded-md flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
              <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-100 border border-red-300 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-red-800">SA</div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-gray-800 truncate leading-tight">{video.title}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{video.channel}</p>
            </div>
            <img src="https://www.youtube.com/favicon.ico" alt="YT" className="w-5 h-5 flex-shrink-0" />
          </div>
        </div>
      )}
      {!playing && (
        <div className="bg-white border-t border-gray-100 px-3 py-2 flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
          <div className="ml-auto flex items-center gap-1 text-xs text-gray-600 font-medium">
            Watch on
            <img src="https://www.youtube.com/favicon.ico" alt="YouTube" className="w-4 h-4 mx-0.5" />
            <span className="font-semibold">YouTube</span>
          </div>
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════
   TOPPER CARD  ── real image + header/footer
══════════════════════════════════════════════ */
function TopperCard({ sheet }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow overflow-hidden flex flex-col">
      {/* Navy header */}
      <div className="bg-[#1a3974] px-2 py-2 flex items-center gap-2 flex-shrink-0">
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[8px] font-black text-[#1a3974] flex-shrink-0 border border-gray-200">
          SA
        </div>
        <div>
          <p className="text-white text-[9px] font-bold leading-tight">St Anthony's PU College</p>
          <p className="text-blue-200 text-[7.5px] leading-tight">Kengeri, Bengaluru</p>
        </div>
      </div>

      {/* Year + label bar */}
      <div className="bg-gray-100 px-2 py-1 flex justify-between items-center flex-shrink-0">
        <span className="text-[8px] text-gray-600 font-semibold whitespace-nowrap">{sheet.year}</span>
        <span className="text-[8px] text-[#1a3974] font-bold text-right leading-tight ml-1">{sheet.label}</span>
      </div>

      {/* Real topper sheet image */}
      <div className="flex-1 overflow-hidden bg-[#dceeff]">
        <img
          src={sheet.img}
          alt={sheet.label}
          className="w-full h-full object-cover object-top"
          style={{ minHeight: 220, maxHeight: 340 }}
        />
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 px-2 py-1.5 text-center flex-shrink-0">
        <p className="text-[7px] text-gray-600 font-medium">Ph: 080-2074 3773 / 9448 98857</p>
        <p className="text-[6.5px] text-gray-400">www.stanthonyspucollege.com</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   TESTIMONIAL SLIDER  ── smooth fade + auto
══════════════════════════════════════════════ */
function TestimonialSlider() {
  const [current, setCurrent]   = useState(0)
  const [animate, setAnimate]   = useState(true)
  const total                    = testimonials.length
  const timerRef                 = useRef(null)

  const goTo = (idx) => {
    setAnimate(false)
    setTimeout(() => {
      setCurrent((idx + total) % total)
      setAnimate(true)
    }, 150)
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => goTo(current + 1), 5000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % total
        setAnimate(false)
        setTimeout(() => setAnimate(true), 150)
        return next
      })
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [total])

  const t = testimonials[current]

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">

          {/* Prev */}
          <button
            onClick={() => { goTo(current - 1); resetTimer() }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-colors hover:opacity-90"
            style={{ background: '#4a7cc7' }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Card */}
          <div
            className="rounded-xl overflow-hidden flex flex-col sm:flex-row transition-opacity duration-300"
            style={{ background: '#4a7cc7', minHeight: 160, opacity: animate ? 1 : 0 }}
          >
            {/* Photo + name */}
            <div className="flex flex-col items-center justify-center px-6 sm:px-8 py-6 sm:w-52 flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[#6a9fd8]">
                {t.photo ? (
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  <svg viewBox="0 0 96 96" className="w-full h-full">
                    <circle cx="48" cy="48" r="48" fill="#6a9fd8" />
                    <circle cx="48" cy="36" r="16" fill="#5a8fc8" />
                    <ellipse cx="48" cy="88" rx="28" ry="20" fill="#5a8fc8" />
                  </svg>
                )}
              </div>
              <p className="text-white font-bold text-sm mt-3 text-center tracking-wide">{t.name}</p>
              <p className="text-blue-100 text-xs mt-0.5 text-center">{t.stream}</p>
            </div>

            {/* Quote */}
            <div className="flex-1 bg-white m-3 sm:m-4 sm:ml-0 rounded-xl p-5 sm:p-6 flex flex-col justify-center relative">
              <span
                className="absolute top-2 left-4 text-5xl font-serif leading-none select-none"
                style={{ color: '#4a7cc7', opacity: 0.2, fontFamily: 'Georgia, serif' }}
              >"</span>
              <p className="text-gray-700 text-sm leading-6 italic pl-4">{t.quote}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => { goTo(current + 1); resetTimer() }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-colors hover:opacity-90"
            style={{ background: '#4a7cc7' }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer() }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 20 : 10,
                height: 10,
                background: i === current ? '#4a7cc7' : '#cbd5e1',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════
   CALENDAR
══════════════════════════════════════════════ */
function CalendarWidget() {
  const today = new Date()
  const [month,    setMonth]    = useState(today.getMonth())
  const [year,     setYear]     = useState(today.getFullYear())
  const [selMonth, setSelMonth] = useState(today.getMonth())
  const [selYear,  setSelYear]  = useState(today.getFullYear())

  const years       = Array.from({ length: 10 }, (_, i) => today.getFullYear() - 3 + i)
  const firstDay    = new Date(year, month, 1).getDay()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const totalRows   = Math.ceil((startOffset + daysInMonth) / 7)

  const isToday = (d) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear()

  const navigate = (delta) => {
    const d = new Date(year, month + delta, 1)
    setMonth(d.getMonth()); setYear(d.getFullYear())
    setSelMonth(d.getMonth()); setSelYear(d.getFullYear())
  }

  return (
    <div>
      <p className="text-gray-500 text-sm mb-2">Events in {MONTHS[month]} {year}</p>

      {/* Nav controls */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <button onClick={() => navigate(-1)} className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 transition-colors">‹</button>
        <button onClick={() => navigate(+1)} className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 transition-colors">›</button>
        <select value={selMonth} onChange={(e) => setSelMonth(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 flex-1 min-w-[100px]">
          {MONTHS.map((m, i) => <option key={i} value={i}>{m}</option>)}
        </select>
        <select value={selYear} onChange={(e) => setSelYear(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700">
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
        <button onClick={() => { setMonth(selMonth); setYear(selYear) }}
          className="px-4 py-1.5 border border-gray-400 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          Go
        </button>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm min-w-[380px]">
          <thead>
            <tr>
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                <th key={d} className="py-2 text-center text-xs font-semibold text-gray-700 border-b-2 border-gray-800">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: totalRows }).map((_, row) => (
              <tr key={row}>
                {Array.from({ length: 7 }).map((_, col) => {
                  const day = row * 7 + col - startOffset + 1
                  const valid = day >= 1 && day <= daysInMonth
                  return (
                    <td key={col}
                      className={`border border-gray-200 text-right align-top text-xs p-1.5 h-10 select-none
                        ${valid ? 'hover:bg-blue-50 cursor-pointer transition-colors' : 'bg-gray-50'}
                        ${valid && isToday(day) ? 'ring-2 ring-inset ring-gray-800' : ''}
                      `}
                    >
                      {valid ? day : ''}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button className="p-1.5 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </button>
        <button className="px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-100 transition-colors">
          All Categories
        </button>
        <button className="px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print
        </button>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   AUTO-SCROLLING LATEST NEWS
══════════════════════════════════════════════ */
function ScrollingNews() {
  const scrollRef = useRef(null)
  const animRef   = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let pos = 0
    const speed = 0.55

    const tick = () => {
      pos += speed
      if (pos >= el.scrollHeight / 2) pos = 0
      el.scrollTop = pos
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)

    const pause  = () => cancelAnimationFrame(animRef.current)
    const resume = () => { animRef.current = requestAnimationFrame(tick) }
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animRef.current)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  const doubled = [...newsItems, ...newsItems]

  return (
    <div className="border-2 border-gray-300 rounded-xl overflow-hidden flex flex-col" style={{ height: 460 }}>
      <div className="bg-[#0288d1] text-white font-bold text-center py-3 text-sm tracking-widest flex-shrink-0">
        LATEST NEWS
      </div>
      <div ref={scrollRef} className="flex-1 overflow-hidden">
        <div>
          {doubled.map((n, i) => (
            <div key={i} className="px-5 py-5 border-b border-gray-100 last:border-0">
              <h4 className="font-bold text-sm mb-2 leading-snug hover:underline cursor-pointer" style={{ color: '#0288d1' }}>
                {n.title}
              </h4>
              <p className="text-gray-700 text-xs leading-5 text-justify mb-2">{n.desc}</p>
              <a href="#" className="text-[#0288d1] text-xs font-bold hover:underline tracking-wide">READ MORE</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>

      {/* ── Hero Slider ── */}
      <section className="relative h-[340px] sm:h-[420px] md:h-[520px] overflow-hidden">
        {slides.map((slide, i) => (
          <div key={i}
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-1000 ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-teal font-semibold text-xs sm:text-sm mb-2 tracking-wider">
                "To Educate... To Empower... To Explore... To Excel..."
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display mb-3 sm:mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-xl italic text-gray-200 mb-5 sm:mb-6">{slide.sub}</p>
              <Link to="/about" className="bg-maroon hover:bg-maroon-dark text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded transition-colors text-sm sm:text-base">
                READ MORE
              </Link>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-1.5 sm:p-2 rounded-full z-20"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-1.5 sm:p-2 rounded-full z-20"
        >
          <ChevronRight size={20} />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </section>

      {/* ── Tagline Bar ── */}
      <div className="bg-[#1a3974] text-white py-2.5 sm:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-[11px] md:text-xs italic font-medium text-center">
            <span className="hidden sm:inline">"To Educate... To Empower... To Explore... To Excel..."</span>
            <span className="text-gray-200">"A Unique Campus for quality education and academic excellence"</span>
            <span className="hidden sm:inline">"Global Vision, Noble Mission: Born to excel as Global Leaders"</span>
          </div>
        </div>
      </div>

      {/* ── About + 360° Wheel ── */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="lg:w-1/2 w-full">
              <p className="text-[#0288d1] font-extrabold text-sm sm:text-base uppercase tracking-widest mb-1">
                WELCOME TO ST ANTHONY'S PU COLLEGE
              </p>
              <h2 className="text-lg sm:text-xl font-bold text-navy mb-1 font-display">About St. Anthony's Institutions</h2>
              <p className="text-gray-500 text-xs sm:text-sm italic mb-3 sm:mb-4">
                "A Unique Campus for Quality Education &amp; Academic Excellence"
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-6 sm:leading-7 mb-3 sm:mb-4 text-justify">
                St. Anthony's Institutions, Bangalore is run by the Capuchin Franciscan Fathers of the Holy Trinity Province of Karnataka.
                It was established in 2009 to provide the best in academics for students in Science, Commerce, Computers, Business Management,
                and Administration by preparing them to qualify and succeed in various highly competitive career streams. It includes
                St. Anthony's Pre-University College, Darshan Degree College, Darshan College Hostel. It's a home away from home, with
                excellent hostel facilities, infrastructure and dedicated teaching staff who mould, mend and form the future of the Nation and of the Globe.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-6 sm:leading-7 mb-5 sm:mb-6 text-justify">
                It has a learning environment and a fraternal ambiance where one feels welcomed and comfortable. It's an institution which
                treats everyone equally with respect and honor regardless of gender, religion, ethnic origin and nationality. The Education
                imparted in this institute is an ongoing process and continuous commitment for the emancipation of the humankind....
              </p>
              <Link to="/about" className="bg-navy text-white font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded hover:bg-blue-900 transition-colors text-xs sm:text-sm inline-block">
                READ MORE
              </Link>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <Wheel360 />
              <img src={img360} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-teal py-8 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ Icon, value, suffix, label }) => (
              <div key={label} className="text-center text-white">
                <div className="flex justify-center mb-2"><Icon size={28} className="sm:w-8 sm:h-8" /></div>
                <div className="text-2xl sm:text-3xl font-bold"><AnimatedCounter end={value} suffix={suffix} /></div>
                <div className="text-xs sm:text-sm text-blue-100 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calendar + Scrolling News ── */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="lg:w-3/5 w-full">
              <CalendarWidget />
            </div>
            <div className="lg:w-2/5 w-full">
              <ScrollingNews />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial Slider ── */}
      <TestimonialSlider />

      {/* ── Campus Videos + Toppers ── */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

            {/* Videos */}
            <div className="lg:w-5/12 w-full">
              <h3 className="text-[#0288d1] font-bold text-base sm:text-lg uppercase tracking-wider mb-4 sm:mb-5">
                CAMPUS VIDEOS
              </h3>
              <div className="flex flex-col gap-4">
                {campusVideos.map((v, i) => <VideoCard key={i} video={v} />)}
              </div>
            </div>

            {/* Toppers – 4 real images in portrait cards */}
            <div className="lg:w-7/12 w-full">
              <h3 className="text-[#0288d1] font-bold text-base sm:text-lg uppercase tracking-wider mb-4 sm:mb-5">
                OUR TOPPERS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {topperSheets.map((sheet, i) => <TopperCard key={i} sheet={sheet} />)}
              </div>

               <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#0288d1] font-bold text-lg sm:text-xl mb-4 sm:mb-5 tracking-wider mt-16">
            APPLICATION FORM
          </h3>
          <div className="flex flex-col items-center gap-2">
            {[
              'Click Here to Download PUC BROCHURE',
              'Click Here to Download PUC PROSPECTUS',
              'Click Here to Download PUC APPLICATION FORM 1',
            ].map((label) => (
              <Link key={label} to="/admission"
                className="text-[#0288d1] font-semibold text-sm hover:text-blue-900 transition-colors hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      {/* <section className="py-8 sm:py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[#0288d1] font-bold text-lg sm:text-xl mb-4 sm:mb-5 tracking-wider">
            APPLICATION FORM
          </h3>
          <div className="flex flex-col items-center gap-2">
            {[
              'Click Here to Download PUC BROCHURE',
              'Click Here to Download PUC PROSPECTUS',
              'Click Here to Download PUC APPLICATION FORM 1',
            ].map((label) => (
              <Link key={label} to="/admission"
                className="text-[#0288d1] font-semibold text-sm hover:text-blue-900 transition-colors hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  )
}