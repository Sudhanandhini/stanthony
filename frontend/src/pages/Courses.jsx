import { Link } from 'react-router-dom'
import { ChevronRight, FileText } from 'lucide-react'

const scienceStreams = [
  { code: 'PCMB', full: 'Physics, Chemistry, Mathematics, Biology' },
  { code: 'PCMCs', full: 'Physics, Chemistry, Mathematics, Computer Science' },
  { code: 'PCME', full: 'Physics, Chemistry, Mathematics, Electronics' },
]

const commerceStreams = [
  { code: 'CEBA', full: 'Computer Science, Economics, Business Studies, Accountancy' },
  { code: 'SEBA', full: 'Statistics, Economics, Business Studies, Accountancy' },
  { code: 'HEBA', full: 'History, Economics, Business Studies, Accountancy' },
  { code: 'MEBA', full: 'Basic Maths, Economics, Business Studies, Accountancy' },
]

const artsStreams = [
  { code: 'HEGS', full: 'History, Economics, Geography, Sociology' },
]

const facilities = [
  'Qualified, Experienced and Dedicated Staff',
  'Special Coaching programme',
  'Innovative Teaching Methods, Audio Visual Presentation',
  'Spacious & Well Equipped Labs & Class Rooms',
  'Finest Playgrounds and Best Infrastructure for Sports',
  'Aim for all round growth: formation of individuals as well as building team spirit in Academics, Arts, Music and Dance',
  'Care of psychological, emotional & spiritual needs of the students of the students',
  'Extra attention to Spoken English',
  'Class Guide System',
  'Personality enhancement programme',
  'Youth Leadership programme',
  'Courses in Human Development, Communication Skills, Event Management & Value Education',
  'Preparation of the generation to face future challenges',
  'An exhaustive library with the latest and updated journals, E-Learning Centric',
  'Counselling Services & Campus Selection from Renowned Companies',
]

export default function Courses() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-teal-dark" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full bg-navy bg-opacity-80 text-center py-3">
            <h1 className="text-3xl font-bold text-white tracking-widest uppercase font-display">PUC</h1>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Brief Details */}
              <div className="border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
                <h2 className="text-xl font-bold text-navy mb-1">Brief Details</h2>
                <p className="text-maroon font-semibold text-sm mb-3 italic">St. Anthony's Pre University College: Science, Commerce & Arts</p>
                <p className="text-gray-600 text-sm leading-7">
                  St. Anthony's Pre-University College is a gateway to your dreams and goals for it has a welcoming ambiance to the students coming from near and far. The College has such an environment that it ensures the holistic development and equips the students with learning skills. As PUC is an important stage of education which builds the future career of the students, the right choice at the right time, the right college at the right age makes all the difference; a turning point of your life.
                </p>
              </div>

              {/* PUC Combinations */}
              <h2 className="text-xl font-bold text-navy mb-4">PUC Combinations:</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Science */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-sci-green font-bold text-base mb-3">1. Science Streams:</h3>
                  {scienceStreams.map((s, i) => (
                    <div key={s.code} className="mb-2 text-sm">
                      <span className="font-semibold text-gray-800">{i + 1}. {s.code}:</span>{' '}
                      <span className="text-gray-600">{s.full}</span>
                    </div>
                  ))}
                </div>

                {/* Commerce */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-com-blue font-bold text-base mb-3">2. Commerce Streams:</h3>
                  {commerceStreams.map((s, i) => (
                    <div key={s.code} className="mb-2 text-sm">
                      <span className="font-semibold text-gray-800">{i + 1}. {s.code}:</span>{' '}
                      <span className="text-gray-600">{s.full}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arts */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h3 className="text-arts-brown font-bold text-base mb-3">3. Arts Stream:</h3>
                {artsStreams.map((s, i) => (
                  <div key={s.code} className="mb-2 text-sm">
                    <span className="font-semibold text-gray-800">{i + 1}. {s.code}:</span>{' '}
                    <span className="text-gray-600">{s.full}</span>
                  </div>
                ))}
                <p className="text-gray-500 text-xs mt-2"><strong>Languages:</strong> English, Kannada, Hindi, French</p>
              </div>

              <div className="bg-navy text-white rounded p-3 text-sm mb-6">
                <strong>The College provides NEET, JEE-Main & Advanced, CA-CPT, CMA & Soft Skills.</strong>
              </div>

              {/* Facilities */}
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">Facilities:</h2>
                <ul className="space-y-2">
                  {facilities.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <ChevronRight size={16} className="text-teal flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-maroon font-bold italic text-sm mt-6">"Educating the mind with a heart of academics"</p>

              {/* Download Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {['PUC BROCHURE', 'PUC PROSPECTUS', 'PUC APPLICATION FORM 1', 'PUC APPLICATION FORM 2'].map((label) => (
                  <Link
                    key={label}
                    to="/admission"
                    className="flex items-center gap-2 text-teal-dark font-semibold text-sm hover:text-maroon transition-colors underline"
                  >
                    <FileText size={14} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-maroon text-white font-bold text-sm text-center py-2 tracking-wider">PROGRAMS</div>
                <div className="p-4 space-y-2">
                  <Link to="/admission" className="flex items-center gap-2 text-navy text-sm font-semibold hover:text-maroon"><ChevronRight size={14} />Admissions</Link>
                  <Link to="/activities" className="flex items-center gap-2 text-navy text-sm font-semibold hover:text-maroon"><ChevronRight size={14} />Activities & Events</Link>
                </div>
              </div>

              {/* Admission Box */}
              <div className="border-2 border-navy rounded-lg overflow-hidden">
                <div className="bg-navy text-white text-center font-bold py-2 text-sm">ADMISSION OPEN</div>
                <div className="p-4 space-y-3">
                  <div className="border-2 border-sci-green rounded p-3 text-center">
                    <div className="bg-sci-green text-white font-bold text-xs py-1 rounded mb-2">PU-SCIENCE</div>
                    <p className="font-bold text-gray-800 text-xs">PCMB, PCMC, PCME</p>
                    <p className="text-red-600 font-bold text-xs mt-1">SPECIAL COACHING FOR</p>
                    <p className="text-sci-green font-extrabold text-sm">CET</p>
                    <p className="text-red-600 font-extrabold text-sm">NEET</p>
                    <p className="text-navy font-extrabold text-sm">JEE Mains</p>
                    <p className="text-navy font-extrabold text-sm">JEE Advanced</p>
                  </div>
                  <div className="border-2 border-com-blue rounded p-3 text-center">
                    <div className="bg-com-blue text-white font-bold text-xs py-1 rounded mb-2">PU-COMMERCE</div>
                    <p className="font-bold text-gray-800 text-xs">EBAC, SEBA, MEBA, HEBA</p>
                  </div>
                  <div className="border-2 border-arts-brown rounded p-3 text-center">
                    <div className="bg-arts-brown text-white font-bold text-xs py-1 rounded mb-2">PU-ARTS</div>
                    <p className="font-bold text-gray-800 text-xs mt-1">HEGS</p>
                  </div>
                  <Link to="/admission" className="block bg-red-600 text-white text-center font-bold text-sm py-2 rounded hover:bg-red-700 transition-colors">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
