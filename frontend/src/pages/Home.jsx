import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, BookOpen, Users, Award, Building2 } from 'lucide-react'

const slides = [
  {
    bg: 'from-navy to-maroon',
    title: 'Welcome to St. Anthony\'s PU College',
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
  { icon: <Users size={32} />, value: '5000+', label: 'Students Enrolled' },
  { icon: <Award size={32} />, value: '100+', label: 'Faculty Members' },
  { icon: <BookOpen size={32} />, value: '18+', label: 'Anthonian Bulletins' },
  { icon: <Building2 size={32} />, value: '360°', label: 'Under One Roof' },
]

const facilities360 = [
  { label: 'Eco-Friendly Campus', color: 'bg-green-600', icon: '🌿' },
  { label: 'Qualified Faculty', color: 'bg-blue-700', icon: '👨‍🏫' },
  { label: 'Sports & Games', color: 'bg-orange-600', icon: '⚽' },
  { label: 'CCTV Surveillance', color: 'bg-gray-700', icon: '📷' },
  { label: 'Special Music Classes', color: 'bg-purple-700', icon: '🎵' },
  { label: 'Prayer Hall', color: 'bg-maroon', icon: '🙏' },
  { label: 'Hostel Facilities', color: 'bg-teal-700', icon: '🏠' },
  { label: 'College Canteen', color: 'bg-yellow-600', icon: '🍽️' },
]

const newsItems = [
  {
    title: 'Workshop on NEET, K-CET & Competitive Exams',
    date: 'March 2026',
    desc: 'St. Anthony\'s PU College organized a workshop for students to have a better knowledge about the NEET,CET & other competitive exams.',
  },
  {
    title: 'Anthonian Premier League (APL) – Season 3',
    date: 'February 2026',
    desc: 'The college conducted its annual inter-class cricket tournament fostering sportsmanship and team spirit among students.',
  },
  {
    title: 'Annual Sports and Athletics Meet 2026',
    date: 'January 2026',
    desc: 'District level sports and athletics meet was conducted showcasing incredible talent among our students.',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="relative z-10">
              <p className="text-teal font-semibold text-sm mb-2 tracking-wider">"To Educate... To Empower... To Explore... To Excel..."</p>
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-4 leading-tight">{slide.title}</h1>
              <p className="text-lg md:text-xl italic text-gray-200 mb-6">{slide.sub}</p>
              <Link to="/about" className="bg-maroon hover:bg-maroon-dark text-white font-semibold px-8 py-3 rounded transition-colors">
                READ MORE
              </Link>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full z-20"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </section>

      {/* Tagline bar */}
      <div className="bg-navy text-white py-3 text-center">
        <p className="text-sm italic font-medium">"A Unique Campus for quality education and academic excellence"</p>
      </div>

      {/* About + 360 wheel */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <p className="text-teal font-bold text-sm uppercase tracking-widest mb-1">Welcome to</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 font-display">ST ANTHONY'S PU COLLEGE</h2>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                St. Anthony's Institutions, Bangalore is run by the Capuchin Franciscan Fathers of the Holy Trinity Province of Karnataka. It was established in 2009 to provide the best in academics for students in Science, Commerce, Computers, Business Management, and Administration by preparing them to qualify and succeed in various highly competitive career streams.
              </p>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                It includes St. Anthony's Pre-University College, Darshan Degree College, Darshan College Hostel. It's a home away from home, with excellent hostel facilities, infrastructure, and dedicated teaching staff who mould, mend and form the future of the Nation.
              </p>
              <Link to="/about" className="bg-maroon text-white font-semibold px-6 py-2.5 rounded hover:bg-maroon-dark transition-colors text-sm inline-block">
                READ MORE
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {facilities360.map((f) => (
                  <div key={f.label} className={`${f.color} text-white rounded-lg p-4 text-center flex flex-col items-center gap-2 shadow-md hover:scale-105 transition-transform`}>
                    <span className="text-3xl">{f.icon}</span>
                    <span className="text-xs font-semibold leading-tight">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-maroon text-white text-center py-3 rounded-lg mt-3 font-bold text-lg tracking-wider">
                360° Under One Roof
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="flex justify-center mb-2 text-teal">{s.icon}</div>
                <div className="text-3xl font-bold text-teal">{s.value}</div>
                <div className="text-sm text-gray-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News + Testimonial */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* News */}
            <div className="lg:w-1/2">
              <div className="bg-teal text-white font-bold text-center py-2.5 text-sm tracking-wider rounded-t">
                LATEST NEWS
              </div>
              <div className="border border-teal rounded-b divide-y">
                {newsItems.map((n, i) => (
                  <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="text-xs text-teal-dark font-semibold mb-1">{n.date}</div>
                    <h4 className="font-bold text-navy text-sm mb-1">{n.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{n.desc}</p>
                    <Link to="/activities" className="text-maroon text-xs font-semibold mt-2 inline-block hover:underline">READ MORE →</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="lg:w-1/2">
              <div className="bg-navy text-white rounded-lg p-8 h-full flex flex-col justify-center">
                <div className="text-teal text-5xl font-serif mb-4">"</div>
                <p className="text-gray-200 text-sm leading-7 italic">
                  At St. Anthony's PU College, there is excellent coaching, I was able to obtain 92.17% in II PU because of the constant help and support of all the faculty members and our Honourable Principal Rev. Fr. Roshan Rosario.
                </p>
                <div className="mt-6 border-t border-white border-opacity-20 pt-4">
                  <p className="text-teal font-bold">PAVITHRA N D</p>
                  <p className="text-gray-400 text-xs">II PU Student, St. Anthony's PU College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Videos + Toppers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <h3 className="text-maroon font-bold text-lg uppercase tracking-wider mb-4 border-b-2 border-maroon pb-2">CAMPUS VIDEOS</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-navy rounded-lg overflow-hidden aspect-video flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-maroon opacity-80" />
                  <div className="relative z-10 text-center text-white">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                    </div>
                    <p className="text-sm font-semibold">St Anthony's PU College, Kengeri</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-maroon font-bold text-lg uppercase tracking-wider mb-4 border-b-2 border-maroon pb-2">OUR TOPPERS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-navy rounded-lg overflow-hidden shadow-md">
                    <div className="bg-maroon h-2" />
                    <div className="p-3">
                      <div className="w-full h-20 bg-gray-200 rounded mb-2 flex items-center justify-center text-gray-400 text-xs">
                        Topper {i}
                      </div>
                      <div className="text-xs text-white text-center font-semibold">Top Achiever {i}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Links */}
      <section className="bg-maroon py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white font-bold text-lg mb-4 tracking-wider">APPLICATION FORM</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['PUC Brochure', 'PUC Prospectus', 'PUC Application Form 1'].map((label) => (
              <Link
                key={label}
                to="/admission"
                className="text-teal font-semibold text-sm hover:text-white transition-colors underline"
              >
                Click Here to Download {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
