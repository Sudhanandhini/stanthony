import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/', color: 'bg-quick-purple' },
  { label: 'St Anthony Global Academy', path: 'https://stanthonyglobalacademy.com', color: 'bg-quick-purple' },
  { label: 'PUC', path: '/courses', color: 'bg-quick-orange' },
  { label: 'Degree', path: 'https://stanthonys.edu.in/', color: 'bg-quick-pink' },
  { label: 'Contact', path: '/contact', color: 'bg-quick-pink' },
]

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer: Quick Links + Admission */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-0">

            {/* Quick Links */}
            <div className="w-full md:w-[30%]">
              <div className="bg-teal text-white text-center font-bold py-2 text-sm tracking-wider mb-3">
                QUICK LINKS
              </div>
              <div className="flex flex-col gap-2 pr-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path + link.label}
                    to={link.path}
                    className={`${link.color} text-white font-semibold text-sm py-2.5 px-4 flex items-center gap-2 hover:opacity-90 transition-opacity w-full`}
                  >
                    <ChevronRight size={16} className="flex-shrink-0" />
                    <span className="flex-1 text-center">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Admission */}
            <div className="w-full md:flex-1">
              <div className="bg-teal text-white text-center font-bold py-2 text-sm tracking-wider mb-3">
                ADMISSION
              </div>

              {/* Cards Grid: PU-Science left (tall), Commerce + Arts stacked right */}
              <div className="flex gap-4 justify-center px-2">

                {/* PU-Science - tall left card */}
                <div className="border-4 border-sci-green rounded w-[200px] flex-shrink-0">
                  <div className="bg-sci-green text-white font-bold text-sm text-center py-1.5">
                    PU-SCIENCE
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-gray-800 text-sm text-center leading-snug mb-2">
                      PCMB, PCMC<br />PCME
                    </p>
                    <p className="text-red-600 font-bold text-xs text-center mt-2 mb-1">SPECIAL COACHING FOR</p>
                    <div className="mt-1 space-y-0.5">
                      <div className="flex items-center gap-1">
                        <ChevronRight size={13} className="text-gray-600 flex-shrink-0" />
                        <span className="text-teal font-extrabold text-lg leading-tight">CET</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChevronRight size={13} className="text-gray-600 flex-shrink-0" />
                        <span className="text-red-600 font-extrabold text-lg leading-tight">NEET</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChevronRight size={13} className="text-gray-600 flex-shrink-0" />
                        <span className="text-navy font-extrabold text-lg leading-tight">JEE</span>
                        <span className="text-navy text-xs font-semibold">Mains</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChevronRight size={13} className="text-gray-600 flex-shrink-0" />
                        <span className="text-navy font-extrabold text-lg leading-tight">JEE</span>
                        <span className="text-navy text-xs font-semibold">Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commerce + Arts stacked */}
                <div className="flex flex-col gap-4">
                  {/* PU-Commerce */}
                  <div className="border-4 border-com-blue rounded w-[200px]">
                    <div className="bg-com-blue text-white font-bold text-sm text-center py-1.5">
                      PU-COMMERCE
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-bold text-gray-800 text-sm leading-snug">
                        EBAC, SEBA,<br />MEBA, HEBA
                      </p>
                    </div>
                  </div>

                  {/* PU-Arts */}
                  <div className="border-4 border-arts-brown rounded w-[200px]">
                    <div className="bg-arts-brown text-white font-bold text-sm text-center py-1.5">
                      PU-ARTS
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-bold text-gray-800 text-sm">HEGS</p>
                    </div>
                  </div>
                </div>

              </div>

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

      {/* Main footer - teal background */}
      <div className="bg-teal py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* About Us */}
            <div className="bg-white rounded p-0 overflow-hidden">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 tracking-wider">ABOUT US</h4>
              <div className="p-3">
                <p className="text-gray-700 text-xs leading-relaxed text-justify">
                  Darshan College established in the year 2002 and situated along the Mysore Road in Kengeri, promotes higher learning in humanities and strives to create a society...
                </p>
                <Link to="/about/institutions" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">More</Link>
              </div>
            </div>

            {/* About Trust */}
            <div className="bg-white rounded p-0 overflow-hidden">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 tracking-wider">ABOUT TRUST</h4>
              <div className="p-3">
                <p className="text-gray-700 text-xs leading-relaxed text-justify">
                  There is only one Education, and it has only one goal: the freedom of the mind. Anything that needs an adjective, be it civics education, or socialist education, or Christian education, or whatever-you-like education...
                </p>
                <Link to="https://www.stanthonyscollege.edu.in/about-trust/" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">More</Link>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded p-0 overflow-hidden">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 tracking-wider">FACILITIES</h4>
              <div className="p-3">
                <p className="text-gray-700 text-xs leading-relaxed text-justify">
                  HOSTEL FACILITY: In view of creating a homely atmosphere and help students who come from distant places, the college provides excellent hostel facilities......
                </p>
                <Link to="/facilities" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">More</Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-white rounded p-0 overflow-hidden">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 tracking-wider">CONTACT US</h4>
              <div className="p-3">
                <div className="text-gray-700 text-xs leading-relaxed space-y-0.5">
                  <p>St Anthony's College</p>
                  <p className="font-bold">Darshan College</p>
                  <p>Dubasipalya, Mysore Road,</p>
                  <p>Opp. R. V. College,</p>
                  <p>R. V. College Post</p>
                  <p>Bangalore - 560 059.</p>
                  <p><strong>Ph no:</strong> +080-29741730 / 29741973.</p>
                  <p>+91 94489 49867.</p>
                </div>
                <Link to="/contact" className="text-blue-700 font-bold text-xs mt-3 inline-block hover:underline">More</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      
      <div className='bg-navy '>
      <div className="container mx-auto px-4 text-gray-400 text-xs py-3 px-6 flex flex-col md:flex-row items-center justify-between gap-1">
        <p>© {new Date().getFullYear()} St. Anthony's Institutions, Kengeri, Bengaluru. All Rights Reserved.</p>
        <p className="text-gray-400">
          Developed by <a href="https://www.sunsys.in/">Sunsys Technologies</a>
        </p>
      </div>
      </div>
    </footer>
  )
}