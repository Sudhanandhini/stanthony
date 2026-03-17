// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home',                  path: '/',                                    color: '#7c3aed' },
  { label: 'St Anthony Global Academy', path: 'https://stanthonyglobalacademy.com', color: '#7c3aed' },
  { label: 'PUC',                   path: '/courses/puc',                          color: '#f59e0b' },
  { label: 'Degree',                path: 'https://stanthonys.edu.in/',            color: '#ec4899' },
  { label: 'Contact',               path: '/contact',                              color: '#ec4899' },
]

function QuickLink({ link }) {
  const isExternal = link.path.startsWith('http')
  const cls = 'flex items-center gap-2 text-white font-semibold text-sm py-2.5 px-4 hover:opacity-90 transition-opacity w-full'
  const inner = (
    <>
      <ChevronRight size={15} className="flex-shrink-0" />
      <span className="flex-1 text-center">{link.label}</span>
    </>
  )
  return isExternal ? (
    <a href={link.path} target="_blank" rel="noreferrer" className={cls} style={{ background: link.color }}>
      {inner}
    </a>
  ) : (
    <Link to={link.path} className={cls} style={{ background: link.color }}>
      {inner}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer>

      {/* ══════════════════════════════════════════
          PRE-FOOTER: Quick Links + Admission
      ══════════════════════════════════════════ */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">

          {/* On mobile: stacked. On md+: side by side */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">

            {/* ── Quick Links ── */}
            <div className="w-full md:w-[28%] md:pr-4">
              <div
                className="text-white text-center font-bold py-2 text-sm tracking-wider mb-3"
                style={{ background: '#0288d1' }}
              >
                QUICK LINKS
              </div>
              <div className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <QuickLink key={link.label} link={link} />
                ))}
              </div>
            </div>

            {/* ── Admission ── */}
            <div className="w-full md:flex-1">
              <div
                className="text-white text-center font-bold py-2 text-sm tracking-wider mb-3"
                style={{ background: '#0288d1' }}
              >
                ADMISSION
              </div>

              {/* Stream cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-start px-0 sm:px-2">

                {/* PU-Science — tall */}
                <div className="border-2 rounded overflow-hidden w-full sm:w-[190px] flex-shrink-0" style={{ borderColor: '#27ae60' }}>
                  <div className="text-white font-bold text-sm text-center py-1.5" style={{ background: '#27ae60' }}>
                    PU-SCIENCE
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-gray-800 text-sm text-center leading-snug mb-2">
                      PCMB, PCMC<br />PCME
                    </p>
                    <p className="text-red-600 font-bold text-[11px] text-center mb-2">SPECIAL COACHING FOR</p>
                    <div className="space-y-0.5">
                      {[
                        { text: 'CET',  color: '#0288d1', sub: '' },
                        { text: 'NEET', color: '#e53935', sub: '' },
                        { text: 'JEE',  color: '#1a3974', sub: 'Mains' },
                        { text: 'JEE',  color: '#1a3974', sub: 'Advanced' },
                      ].map(({ text, color, sub }, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <ChevronRight size={12} className="flex-shrink-0 text-gray-500" />
                          <span className="font-extrabold text-base leading-tight" style={{ color }}>{text}</span>
                          {sub && <span className="font-semibold text-xs" style={{ color }}>{sub}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Commerce + Arts stacked */}
                <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-auto flex-1 sm:flex-none">
                  {/* Commerce */}
                  <div className="border-2 rounded overflow-hidden flex-1 sm:w-[190px]" style={{ borderColor: '#0288d1' }}>
                    <div className="text-white font-bold text-sm text-center py-1.5" style={{ background: '#0288d1' }}>
                      PU-COMMERCE
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-bold text-gray-800 text-sm leading-snug">
                        EBAC, SEBA,<br />MEBA, HEBA
                      </p>
                    </div>
                  </div>

                  {/* Arts */}
                  <div className="border-2 rounded overflow-hidden flex-1 sm:w-[190px]" style={{ borderColor: '#e67e22' }}>
                    <div className="text-white font-bold text-sm text-center py-1.5" style={{ background: '#e67e22' }}>
                      PU-ARTS
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-bold text-gray-800 text-sm">HEGS</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Know More button */}
              <div className="text-center mt-4">
                <Link
                  to="/admission"
                  className="bg-red-600 text-white font-bold text-sm px-6 py-1.5 rounded hover:bg-red-700 transition-colors inline-block"
                >
                  Know More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN FOOTER: 4 white cards on teal
      ══════════════════════════════════════════ */}
      <div className="py-8" style={{ background: '#0288d1' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* About Us */}
            <div className="bg-white rounded overflow-hidden">
              <h4 className="text-white font-bold text-sm px-3 py-2 tracking-wider" style={{ background: '#0277b5' }}>
                ABOUT US
              </h4>
              <div className="p-3">
                <p className="text-gray-700 text-xs leading-5 text-justify">
                  Darshan College established in the year 2002 and situated along the Mysore Road in Kengeri,
                  promotes higher learning in humanities and strives to create a society...
                </p>
                <Link to="/about/institutions" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">
                  More
                </Link>
              </div>
            </div>

            {/* About Trust */}
            <div className="bg-white rounded overflow-hidden">
              <h4 className="text-white font-bold text-sm px-3 py-2 tracking-wider" style={{ background: '#0277b5' }}>
                ABOUT TRUST
              </h4>
              <div className="p-3">
                <p className="text-gray-700 text-xs leading-5 text-justify">
                  There is only one Education, and it has only one goal: the freedom of the mind. Anything that
                  needs an adjective, be it civics education, or socialist education, or Christian education,
                  or whatever-you-like education...
                </p>
                <Link to="/about/trust" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">
                  More
                </Link>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded overflow-hidden">
              <h4 className="text-white font-bold text-sm px-3 py-2 tracking-wider" style={{ background: '#0277b5' }}>
                FACILITIES
              </h4>
              <div className="p-3">
                <p className="text-gray-700 text-xs leading-5 text-justify">
                  HOSTEL FACILITY: In view of creating a homely atmosphere and help students who come from
                  distant places, the college provides excellent hostel facilities......
                </p>
                <Link to="/facilities" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">
                  More
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-white rounded overflow-hidden">
              <h4 className="text-white font-bold text-sm px-3 py-2 tracking-wider" style={{ background: '#0277b5' }}>
                CONTACT US
              </h4>
              <div className="p-3">
                <div className="text-gray-700 text-xs leading-5 space-y-0.5">
                  <p>St Anthony's College</p>
                  <p className="font-bold">Darshan College</p>
                  <p>Dubasipalya, Mysore Road,</p>
                  <p>Opp. R. V. College,</p>
                  <p>R. V. College Post</p>
                  <p>Bangalore - 560 059.</p>
                  <p><strong>Ph no:</strong> +080-29741730 / 29741973.</p>
                  <p>+91 94489 49867.</p>
                </div>
                <Link to="/contact" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">
                  More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          COPYRIGHT BAR
      ══════════════════════════════════════════ */}
      <div style={{ background: '#1a3974' }}>
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-gray-300">
          <p>© {new Date().getFullYear()} St. Anthony's Institutions, Kengeri, Bengaluru. All Rights Reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.sunsys.in/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:underline"
            >
              Sunsys Technologies
            </a>
          </p>
        </div>
      </div>

    </footer>
  )
}