import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/', color: 'bg-quick-purple' },
  { label: 'St Anthony Global Academy', path: '/about', color: 'bg-quick-purple' },
  { label: 'PUC', path: '/courses', color: 'bg-quick-orange' },
  { label: 'Degree', path: '/about', color: 'bg-quick-pink' },
  { label: 'Contact', path: '/contact', color: 'bg-quick-pink' },
]

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer: Quick Links + Admission */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Quick Links */}
            <div className="w-full md:w-1/3">
              <div className="bg-teal text-white text-center font-bold py-2 text-sm tracking-wider mb-3 rounded-t">
                QUICK LINKS
              </div>
              <div className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path + link.label}
                    to={link.path}
                    className={`${link.color} text-white font-semibold text-sm py-2.5 px-4 rounded flex items-center gap-2 hover:opacity-90 transition-opacity`}
                  >
                    <ChevronRight size={16} className="flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Admission */}
            <div className="w-full md:flex-1">
              <div className="bg-teal text-white text-center font-bold py-2 text-sm tracking-wider mb-3 rounded-t">
                ADMISSION
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* PU-Science */}
                <div className="border-4 border-sci-green rounded p-3 min-w-[160px] text-center">
                  <div className="bg-sci-green text-white font-bold text-sm px-3 py-1 -mt-6 mx-auto w-fit rounded mb-2">
                    PU-SCIENCE
                  </div>
                  <p className="font-bold text-gray-800 text-sm leading-snug">PCMB, PCMC<br />PCME</p>
                  <p className="text-red-600 font-bold text-xs mt-1">SPECIAL COACHING FOR</p>
                  <div className="text-left mt-1">
                    <div className="flex items-center gap-1"><ChevronRight size={12} className="text-gray-600" /><span className="text-sci-green font-extrabold text-base">CET</span></div>
                    <div className="flex items-center gap-1"><ChevronRight size={12} className="text-gray-600" /><span className="text-red-600 font-extrabold text-base">NEET</span></div>
                    <div className="flex items-center gap-1"><ChevronRight size={12} className="text-gray-600" /><span className="text-navy font-extrabold text-base">JEE</span><span className="text-navy text-xs font-semibold">Mains</span></div>
                    <div className="flex items-center gap-1"><ChevronRight size={12} className="text-gray-600" /><span className="text-navy font-extrabold text-base">JEE</span><span className="text-navy text-xs font-semibold">Advanced</span></div>
                  </div>
                </div>

                {/* PU-Commerce */}
                <div className="border-4 border-com-blue rounded p-3 min-w-[160px] text-center">
                  <div className="bg-com-blue text-white font-bold text-sm px-3 py-1 -mt-6 mx-auto w-fit rounded mb-2">
                    PU-COMMERCE
                  </div>
                  <p className="font-bold text-gray-800 text-sm leading-snug">EBAC, SEBA,<br />MEBA, HEBA</p>
                </div>

                {/* PU-Arts */}
                <div className="border-4 border-arts-brown rounded p-3 min-w-[140px] text-center">
                  <div className="bg-arts-brown text-white font-bold text-sm px-3 py-1 -mt-6 mx-auto w-fit rounded mb-2">
                    PU-ARTS
                  </div>
                  <p className="font-bold text-gray-800 text-sm mt-2">HEGS</p>
                </div>
              </div>
              <div className="text-center mt-3">
                <Link to="/admission" className="bg-red-600 text-white font-bold text-sm px-5 py-1.5 rounded hover:bg-red-700 transition-colors inline-block">
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
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 rounded mb-3 tracking-wider">ABOUT US</h4>
              <p className="text-white text-xs leading-relaxed">
                Darshan College established in the year 2002 and situated along the Mysore Road in Kengeri, promotes higher learning in humanities and strives to create a society...
              </p>
              <Link to="/about" className="text-navy font-bold text-xs mt-2 inline-block bg-white px-3 py-1 rounded hover:bg-gray-100">More</Link>
            </div>

            {/* About Trust */}
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 rounded mb-3 tracking-wider">ABOUT TRUST</h4>
              <p className="text-white text-xs leading-relaxed">
                There is only one Education, and it has only one goal: the freedom of the mind. Anything that needs an adjective, be it civics education, or socialist education, or Christian education, or whatever-you-like education...
              </p>
              <Link to="/about" className="text-navy font-bold text-xs mt-2 inline-block bg-white px-3 py-1 rounded hover:bg-gray-100">More</Link>
            </div>

            {/* Facilities */}
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 rounded mb-3 tracking-wider">FACILITIES</h4>
              <p className="text-white text-xs leading-relaxed">
                HOSTEL FACILITY: In view of creating a homely atmosphere and help students who come from distant places, the college provides excellent hostel facilities...
              </p>
              <Link to="/facilities" className="text-navy font-bold text-xs mt-2 inline-block bg-white px-3 py-1 rounded hover:bg-gray-100">More</Link>
            </div>

            {/* Contact Us */}
            <div className="bg-white bg-opacity-10 rounded p-4">
              <h4 className="bg-teal-dark text-white font-bold text-sm px-3 py-2 rounded mb-3 tracking-wider">CONTACT US</h4>
              <div className="text-white text-xs leading-relaxed space-y-1">
                <p className="font-semibold">St Anthony's College</p>
                <p className="font-bold">Darshan College</p>
                <p>Dubasipalya, Mysore Road,</p>
                <p>Opp. R. V. College,</p>
                <p>R. V. College Post</p>
                <p>Bangalore - 560 059.</p>
                <p><strong>Ph no:</strong> +080-29741730 / 29741973.</p>
                <p>+91 94489 49867.</p>
              </div>
              <Link to="/contact" className="text-navy font-bold text-xs mt-2 inline-block bg-white px-3 py-1 rounded hover:bg-gray-100">More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-navy text-white text-center text-xs py-3">
        <p>© {new Date().getFullYear()} St. Anthony's Institutions, Kengeri, Bengaluru. All Rights Reserved.</p>
        <p className="text-gray-400 mt-0.5">Designed by <span className="text-teal font-semibold">Sunsys Technologies</span></p>
      </div>
    </footer>
  )
}
