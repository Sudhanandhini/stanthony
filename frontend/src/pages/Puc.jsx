// src/pages/courses/PUC.jsx
import { Link } from 'react-router-dom'
import ban23 from '../assets/puc.jpg'
import banner1 from "../assets/PUC-Brochure.jpg"

import pdfBrochure    from "../assets/pdf/16th-year-Brochure-2025-1.pdf"
import pdfProspectus  from "../assets/pdf/ST.-Anthonys-Prospectus-2026-compressed.pdf"
import pdfForm1       from "../assets/pdf/PUC-APPLICATION-FORM-ONE-2025-26.pdf"
import pdfForm2       from "../assets/pdf/Microsoft Word - ADMGUIDELINES 2014-15.docx.pdf"

// Replace with your actual college ad/brochure image
// import adImg from '../assets/puc-ad.jpg'

const scienceStreams = [
  { code: 'PCMB',  subjects: 'Physics, Chemistry, Mathematics, Biology' },
  { code: 'PCMCs', subjects: 'Physics, Chemistry, Mathematics, Computer Science' },
  { code: 'PCME',  subjects: 'Physics, Chemistry, Mathematics, Electronics' },
]

const commerceStreams = [
  { code: 'CEBA', subjects: 'Computer Science, Economics, Business Studies, Accountancy' },
  { code: 'SEBA', subjects: 'Statistics, Economics, Business Studies, Accountancy' },
  { code: 'HEBA', subjects: 'History, Economics, Business Studies, Accountancy' },
  { code: 'MEBA', subjects: 'Basic Maths, Economics, Business Studies, Accountancy' },
]

const facilities = [
  'Qualified, Experienced and Dedicated Staff',
  'Special Coaching programme.',
  'Innovative Teaching Methods: Audio-Visual Presentation.',
  'Spacious & Well Equipped Labs & Class Rooms.',
  'Finest Playgrounds and Best Infrastructure for Sports.',
  'Attention for all-round growth, formation of individuals as well as building team spirit in Academics, Arts, Music and Dance.',
  'Care of psychological, emotional & spiritual needs of the students.',
  'Extra attention to Spoken English.',
  'Class Guide System.',
  'Personality enhancement programme.',
  'Youth Leadership programme.',
  'Courses in Human Development, Communication Skills, Event Management & Value Education.',
  'Preparation of the generation to face future challenges.',
  'An exhaustive library with the latest and updated journals. E-Learning Centre.',
  'Counselling Services & Campus Selection from Renowned Companies.',
]

const downloads = [
  { label: 'PUC BROCHURE',          href: pdfBrochure },
  { label: 'PUC PROSPECTUS',         href: pdfProspectus },
  { label: 'PUC APPLICATION FORM 1', href: pdfForm1 },
  { label: 'PUC APPLICATION FORM 2', href: pdfForm2 },
]

export default function PUC() {
  return (
    <div>

      {/* ── Full-width banner ── */}
      <div className="w-full overflow-hidden" style={{ maxHeight: 300 }}>
        <img
          src={ban23}
          alt="St. Anthony's PU College"
          className="w-full object-cover object-center"
          style={{ display: 'block' }}
        />
      </div>

      {/* ── Blue italic title bar ── */}
   

      {/* ── Main 2-column layout ── */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ════════ LEFT COLUMN ════════ */}
            <div className="flex-1 min-w-0">

              {/* Brief Details box */}
              <div className="border border-[#f7f1cd] rounded p-5 mb-7 bg-[#f7f1cd]">
                <h3 className="font-bold text-[15px] text-gray-800 mb-2">Brief Details</h3>
                <p className="font-bold italic text-[13px] text-gray-700 mb-3">
                  St. Anthony's Pre University College: Science, Commerce &amp; Arts
                </p>
                <p className="text-[13px] text-gray-600 leading-6 text-justify">
                  St Anthony's Pre-University College is a gateway to your dreams and goals for it
                  has a welcoming ambiance to the students coming from near and far. The College has
                  such an environment that it ensures the holistic development and equips the students
                  with learning skills. As PUC is an important stage of education which builds the
                  future career of the students, the right choice at the right time, the right college
                  at the right age makes all the difference, a turning point of your life.
                </p>
              </div>

              {/* PUC Combinations */}
              <div className="mb-7 bg-[#f9eaff] border border-[#f9eaff] rounded  p-5 mb-7">
                <h3 className="font-bold text-[17px] text-gray-800 mb-4">PUC Combinations:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">

                  {/* Science */}
                  <div>
                    <p className="font-bold text-[13px] text-gray-800 mb-2 underline">
                      1. Science Streams:
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                      {scienceStreams.map((s, i) => (
                        <li key={s.code} className="text-[12.5px] text-gray-600">
                          <strong>{s.code}</strong>: {s.subjects}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Commerce */}
                  <div>
                    <p className="font-bold text-[13px] text-gray-800 mb-2 underline">
                      2. Commerce Streams:
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                      {commerceStreams.map((s, i) => (
                        <li key={s.code} className="text-[12.5px] text-gray-600">
                          <strong>{s.code}</strong>: {s.subjects}
                        </li>
                      ))}
                    </ol>
                    <p className="text-[12.5px] text-gray-600 mt-2">
                      <strong>Languages</strong>: English, Kannada, Hindi, French.
                    </p>
                  </div>
                </div>

                {/* Arts */}
                <div className="mb-3">
                  <p className="font-bold text-[13px] text-gray-800 mb-1 underline">
                    3. Arts Stream:
                  </p>
                  <ol className="list-decimal list-inside">
                    <li className="text-[12.5px] text-gray-600">
                      <strong>HEGS</strong>: History, Economics, Geography, Sociology
                    </li>
                  </ol>
                </div>

                <p className="font-bold text-[12.5px] text-gray-700">
                  The College provides NEET, JEE-Main &amp; Advanced, CA-CPT, CMA &amp; Soft Skills.
                </p>

 <div className="flex gap-10 mt-7 border-t border-b border-gray-200 py-4">
                <div>
                  <p className="font-bold text-[13px] text-gray-700 mb-1">Question Bank</p>
                  <a href="#" className="text-[#0288d1] text-[12.5px] hover:underline">Read More</a>
                </div>
                <div>
                  <p className="font-bold text-[13px] text-gray-700 mb-1">Other Courses</p>
                  <a href="/courses/other-courses" className="text-[#0288d1] text-[12.5px] hover:underline">Read More</a>
                </div>
              </div>

              </div>

             

              {/* Facilities */}
              <div className="mb-7">
                <h3 className="font-bold text-[17px] text-gray-800 mb-3">Facilities:</h3>
                <ul className="space-y-1.5">
                  {facilities.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] text-gray-600">
                      <span className="mt-0.5 flex-shrink-0">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <p className="italic text-[13px] text-gray-600 mb-4">
                "… Educating the mind with a heart of academics"
              </p>

              {/* Download links */}
              <div className="space-y-2">
                {downloads.map((d) => (
                  <div key={d.label}>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="text-[13px] font-semibold hover:underline"
                      style={{ color: '#0288d1' }}
                    >
                      {d.label}
                    </a>
                  </div>
                ))}
              </div>

            </div>

            {/* ════════ RIGHT COLUMN ════════ */}
            <div className="lg:w-56 xl:w-64 flex-shrink-0">

              {/* PROGRAMS widget */}
              <div className="mb-5">
                <h3
                  className="font-bold text-[14px] tracking-wider mb-3"
                  style={{ color: '#0288d1' }}
                >
                  PROGRAMS
                </h3>
                <div className="space-y-1">
                  {[
                    { label: 'Admissions',        to: '/admission' },
                    { label: 'Activities & Events', to: '/activities' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1">
                      <span className="text-gray-400 text-xs">›</span>
                      <Link
                        to={item.to}
                        className="text-[13px] text-gray-700 hover:text-[#0288d1] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* College advertisement / brochure image */}
              <div className="border border-gray-200 rounded overflow-hidden shadow-sm">
                {/* Replace with your actual ad image */}
                <img
                  src={banner1}
                  alt="St. Anthony's PU College"
                  className="w-full"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = `
                      <div style="background:#1a3974;padding:16px;color:white;font-size:11px;text-align:center">
                        <div style="font-weight:bold;font-size:13px;margin-bottom:6px">ST. ANTHONY'S<br/>PRE-UNIVERSITY COLLEGE</div>
                        <div style="color:#90caf9;font-size:10px;margin-bottom:8px">Recognised by Govt. of Karnataka</div>
                        <div style="background:#f39c12;color:white;font-weight:bold;padding:4px 6px;border-radius:3px;font-size:10px;margin-bottom:6px">PUC SPECIAL TRAINING</div>
                        <div style="font-weight:bold;font-size:14px;color:#ffeb3b">NEET – JEE</div>
                        <div style="font-size:10px;color:#b3d9ff">CA-CPT CMA SOFT SKILLS</div>
                        <hr style="border-color:#ffffff33;margin:8px 0"/>
                        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;font-size:9px;margin-bottom:8px">
                          <div style="background:#2e7d32;padding:4px;border-radius:2px">PU-SCIENCE<br/><span style="font-size:8px">PCMB|PCMCs|PCME</span></div>
                          <div style="background:#0288d1;padding:4px;border-radius:2px">PU-COMMERCE<br/><span style="font-size:8px">CEBA|SEBA|MEBA|HEBA</span></div>
                          <div style="background:#e65c00;padding:4px;border-radius:2px">PU-ARTS<br/><span style="font-size:8px">HEGS</span></div>
                        </div>
                        <hr style="border-color:#ffffff33;margin:8px 0"/>
                        <div style="font-weight:bold;font-size:11px;margin-bottom:4px">DARSHAN DEGREE COLLEGE</div>
                        <div style="font-size:10px;color:#b3d9ff">B.Com &nbsp; BBA &nbsp; BCA</div>
                        <hr style="border-color:#ffffff33;margin:8px 0"/>
                        <div style="font-size:9px;color:#b3d9ff">Ph: 080-2974 1973 / 94489 49867</div>
                        <div style="font-size:9px;color:#b3d9ff">www.stanthonyscollege.edu.in</div>
                      </div>`
                  }}
                />
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}