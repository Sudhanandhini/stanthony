// src/pages/courses/PUC.jsx
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const streams = [
  {
    name: 'PU Science',
    path: '/courses/science',
    color: '#0288d1',
    icon: '🔬',
    subjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'English / Kannada / Hindi'],
    desc: 'Ideal for students aiming for Engineering (CET / JEE) or Medical (NEET). Specialised coaching for competitive exams is integrated into the curriculum.',
    badge: 'CET • NEET • JEE',
  },
  {
    name: 'PU Commerce',
    path: '/courses/commerce',
    color: '#2e7d32',
    icon: '📊',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / Statistics', 'English'],
    desc: 'Designed for students aspiring towards careers in Commerce, CA, CMA, CS, Banking, Finance and Management.',
    badge: 'CA • CMA • CS',
  },
  {
    name: 'PU Arts',
    path: '/courses/arts',
    color: '#6a1b9a',
    icon: '📚',
    subjects: ['History', 'Political Science', 'Sociology / Psychology', 'Economics', 'Language'],
    desc: 'Opens pathways to careers in Law, Journalism, Civil Services, Psychology, Social Work and the Humanities.',
    badge: 'Law • UPSC • Journalism',
  },
]

export default function PUC() {
  return (
    <div>
      <PageHero title="PUC" breadcrumb={['Home', 'Courses', 'PUC']} />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">
            Pre-University College
          </p>
          <h2 className="text-2xl font-bold text-navy mb-4">Streams Offered at St. Anthony's PUC</h2>
          <div className="w-16 h-1 bg-maroon mb-3 rounded-full" />
          <p className="text-gray-600 text-sm leading-7 mb-8 max-w-2xl">
            St. Anthony's PU College offers three streams under the Pre-University Board, Karnataka.
            Each stream comes with dedicated faculty, special competitive-exam coaching and strong
            results year after year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streams.map((s) => (
              <div
                key={s.name}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                <div className="h-2" style={{ background: s.color }} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: s.color }}>{s.name}</h3>
                  <span
                    className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 text-white w-fit"
                    style={{ background: s.color }}
                  >
                    {s.badge}
                  </span>
                  <p className="text-gray-600 text-xs leading-6 mb-4">{s.desc}</p>
                  <div className="mt-auto">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Subjects</p>
                    <ul className="space-y-1">
                      {s.subjects.map((sub) => (
                        <li key={sub} className="flex items-center gap-2 text-xs text-gray-700">
                          <span style={{ color: s.color }}>✦</span> {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={s.path}
                    className="mt-5 block text-center text-white text-sm font-semibold py-2 rounded-lg transition-opacity hover:opacity-90"
                    style={{ background: s.color }}
                  >
                    Know More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose SAPUC */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">Why Choose St. Anthony's PUC?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '👨‍🏫', text: 'Experienced Faculty' },
              { icon: '🏆', text: 'Top Results' },
              { icon: '📖', text: 'CET / NEET Coaching' },
              { icon: '🏠', text: 'Hostel Facility' },
              { icon: '⚽', text: 'Sports & Arts' },
              { icon: '🌿', text: 'Eco-Friendly Campus' },
            ].map(({ icon, text }) => (
              <div key={text} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-xs font-semibold text-gray-700 leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-[#1a3974]">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-white font-bold text-lg mb-3">Admissions Open for 2025–26</h4>
          <p className="text-blue-200 text-sm mb-5">
            Secure your seat today. Limited seats available in all streams.
          </p>
          <Link
            to="/admission"
            className="inline-block bg-maroon hover:bg-red-800 text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  )
}