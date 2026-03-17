// src/pages/Contact.jsx  — Frontend only, matches WordPress screenshot exactly

import { useState } from 'react'
import ban from "../assets/14-1.jpg"

const leadership = [
  {
    role: "President, St. Anthony's Institutions",
    name: "Rev. Fr. Robin Victor D'Souza, OFM Cap.",
    qual: 'B.Ed, M.ph(France), MBA',
  },
  {
    role: "Director, St. Anthony's Institutions",
    name: 'Rev. Fr. Charles J R Furtado.',
    qual: '',
  },
  {
    role: "Principal, St. Anthony's PU College",
    name: 'Rev. Fr. Roshan Rosario, OFM Cap.',
    qual: 'B.Ph., B.Th., M.A. (Eco)',
  },
  {
    role: "Principal, St Anthony's College",
    name: "Rev. Fr. Joy Wilson D'Souza, OFM Cap.",
    qual: 'M.Com, MBA',
  },
  {
    role: "Academic Co-ordinator, St. Anthony's PU College",
    name: "Rev. Fr. Clement Paul D'Souza, OFM Cap.",
    qual: 'M.A.(Eco)',
  },
]

const inp =
  'w-full border-0 border-b border-gray-300 px-0 py-1.5 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#0288d1] placeholder-gray-400'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>

      {/* ── Hero banner ── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: 300, background: '#c8d0d8' }}
      >
      <img src={ban} />
      </div>
        {/* <div className="absolute inset-0 flex items-center justify-center gap-16 opacity-30">
       
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.36C1.61 2.28 2.5 1.39 3.58 1.39h3a2 2 0 0 1 2 1.72c.13 1.02.36 2.02.7 2.98a2 2 0 0 1-.45 2.11L7.91 9.15a16 16 0 0 0 6.93 6.93l.94-.95a2 2 0 0 1 2.11-.45c.96.34 1.96.57 2.98.7a2 2 0 0 1 1.73 2.04z"/>
          </svg>
   
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.2">
            <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
          </svg>
          
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </div>
      </div> */}

   
      {/* <div
        className="w-full text-white text-center font-bold tracking-[0.25em] py-3 text-lg"
        style={{ background: '#1565c0', fontFamily: 'Georgia, serif', letterSpacing: '0.2em' }}
      >
        CONTACT US
      </div> */}

      {/* ── Google Map — full width ── */}
      <div className="w-full" style={{ height: 380 }}>
        <iframe
          title="St. Anthony's PU College"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8762!2d77.48729!3d12.9046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1e4b8e3a2b%3A0x5f2f1e3c4a5b6c7d!2sSt.%20Anthony's%20PU%20College%2C%20Kengeri%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="380"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── 3-column section ── */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

            {/* ═══ COL 1 — Contact Info + Follow Us ═══ */}
            <div className="lg:w-[30%] flex-shrink-0">
              <h2 className="font-bold text-[15px] text-gray-800 mb-3">Contact Information :</h2>

              <div className="text-[13px] text-gray-700 leading-6 mb-4">
                <p className="font-bold text-gray-900">St Anthony's PU College,</p>
                <p className="font-bold text-gray-900">St Anthony's College</p>
                <p>Dubasipalya, Mysore Road,</p>
                <p>Opp. R. V. College, Kengeri</p>
                <p>Bangalore – 560 059.</p>
                <p>Karnataka, India.</p>
              </div>

              <div className="text-[13px] space-y-1.5">
                <div className="flex gap-1">
                  <span className="font-semibold text-gray-800 min-w-[52px]">Phone:</span>
                  <div>
                    <a href="tel:08029741973" className="text-gray-700 hover:text-[#0288d1]">080 – 29741973</a>
                    {', '}
                    <a href="tel:+919448949867" className="text-gray-700 hover:text-[#0288d1]">+91-9448949867</a>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold text-gray-800 min-w-[52px]">Email:</span>
                  <a href="mailto:stanthonybangalore@gmail.com" className="text-[#0288d1] hover:underline break-all">
                    stanthonybangalore@gmail.com
                  </a>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold text-gray-800 min-w-[52px]">Email:</span>
                  <a href="mailto:principalas65@gmail.com" className="text-[#0288d1] hover:underline break-all">
                    principalas65@gmail.com
                  </a>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold text-gray-800 min-w-[52px]">Websites:</span>
                  <div>
                    <a href="https://www.stanthonyscollege.edu.in" target="_blank" rel="noreferrer"
                      className="text-[#0288d1] hover:underline block break-all">
                      www.stanthonyscollege.edu.in
                    </a>
                    <a href="https://www.stanthonys.edu.in" target="_blank" rel="noreferrer"
                      className="text-[#0288d1] hover:underline block break-all">
                      www.stanthonys.edu.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="mt-6">
                <h3 className="font-bold text-[14px] text-gray-800 mb-3">Follow Us</h3>

                {/* Social banner card — matching the WP image */}
                <div
                  className="rounded overflow-hidden border border-gray-200"
                  style={{ background: '#1a3974', minHeight: 120 }}
                >
                  <div className="p-3 flex items-start gap-2">
                    {/* Mini logo */}
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-xs border-2 border-white"
                      style={{ background: '#0288d1' }}
                    >
                      SA
                    </div>
                    <div>
                      <p className="text-white font-bold text-[11px] leading-tight">St. Anthony's PU College</p>
                      <p className="text-blue-200 text-[10px]">Kengeri, Bengaluru</p>
                    </div>
                  </div>

                  {/* Social icons row */}
                  <div className="flex items-center gap-3 px-3 pb-3">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: '#1877f2' }}>f</a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ background: '#ff0000' }}>
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px]"
                      style={{ background: 'radial-gradient(circle at 30% 107%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285AEB 90%)' }}>
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                      </svg>
                    </a>
                    <span className="text-blue-200 text-[9px] ml-auto">+91 94489 49867</span>
                  </div>

                  <div className="px-3 pb-3 text-[9px] text-blue-200">
                    stanthonybangalore@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ COL 2 — Leadership ═══ */}
            <div className="lg:w-[35%] flex-shrink-0">
              <div className="space-y-4">
                {leadership.map((l) => (
                  <div key={l.role}>
                    <p className="font-bold text-[13px] text-gray-900 leading-snug">{l.role}</p>
                    <p className="text-[12.5px] text-gray-700 mt-0.5">{l.name}</p>
                    {l.qual && <p className="text-[12px] text-gray-500">{l.qual}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ COL 3 — Enquiry Form ═══ */}
            <div className="lg:w-[35%] flex-shrink-0">
              {/* Blue ENQUIRY header */}
              <div className="mb-4">
                <h2
                  className="font-bold text-base tracking-widest"
                  style={{ color: '#0288d1' }}
                >
                  ENQUIRY
                </h2>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-300 text-green-700 rounded p-4 text-sm font-semibold text-center">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label className="block text-[12px] text-gray-600 mb-1">Name (required)</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set('name')}
                      className={inp}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] text-gray-600 mb-1">Email (required)</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set('email')}
                      className={inp}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] text-gray-600 mb-1">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={set('subject')}
                      className={inp}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] text-gray-600 mb-1">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      className={inp + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-bold text-sm py-2.5 rounded transition-opacity hover:opacity-90"
                    style={{ background: '#0288d1' }}
                  >
                    Send
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}