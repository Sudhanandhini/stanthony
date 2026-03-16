// src/pages/courses/Degree.jsx
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const programmes = [
  {
    name: 'B.Com',
    icon: '📈',
    color: '#0288d1',
    duration: '3 Years',
    affiliation: 'Bangalore University',
    desc: 'Bachelor of Commerce – equips students with comprehensive knowledge in Accounting, Finance, Taxation and Business Law.',
  },
  {
    name: 'BBA',
    icon: '💼',
    color: '#6a1b9a',
    duration: '3 Years',
    affiliation: 'Bangalore University',
    desc: 'Bachelor of Business Administration – focuses on management principles, entrepreneurship and organisational behaviour.',
  },
  {
    name: 'BCA',
    icon: '💻',
    color: '#2e7d32',
    duration: '3 Years',
    affiliation: 'Bangalore University',
    desc: 'Bachelor of Computer Applications – develops expertise in programming, software development, databases and IT systems.',
  },
  {
    name: 'BA',
    icon: '🎨',
    color: '#e65c00',
    duration: '3 Years',
    affiliation: 'Bangalore University',
    desc: 'Bachelor of Arts – offers a rich blend of humanities subjects including History, Economics, Political Science and Languages.',
  },
  {
    name: 'MBA',
    icon: '🏆',
    color: '#1a3974',
    duration: '2 Years',
    affiliation: 'Bangalore University',
    desc: 'Master of Business Administration – a flagship postgraduate programme developing future business leaders and managers.',
  },
]

export default function Degree() {
  return (
    <div>
      <PageHero
        title="DEGREE (UG / MBA) – ST. ANTHONY'S COLLEGE"
        breadcrumb={['Home', 'Courses', 'Degree']}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">
            Darshan Degree College
          </p>
          <h2 className="text-2xl font-bold text-navy mb-4">
            Undergraduate & Postgraduate Programmes
          </h2>
          <div className="w-16 h-1 bg-maroon mb-3 rounded-full" />
          <p className="text-gray-600 text-sm leading-7 mb-8 max-w-2xl">
            Darshan Degree College, affiliated to Bangalore University, offers a range of UG and PG
            programmes under the umbrella of St. Anthony's Institutions. Our degree programmes combine
            academic excellence with practical skills and holistic development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmes.map((p) => (
              <div key={p.name}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-2" style={{ background: p.color }} />
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0"
                      style={{ background: p.color }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base" style={{ color: p.color }}>{p.name}</h3>
                      <p className="text-[10px] text-gray-500">{p.duration} • {p.affiliation}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-6 flex-1">{p.desc}</p>
                  <Link
                    to="/admission"
                    className="mt-4 block text-center text-white text-xs font-semibold py-2 rounded-lg transition-opacity hover:opacity-90"
                    style={{ background: p.color }}
                  >
                    Apply for {p.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1a3974]">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-white font-bold text-lg mb-3">Admissions Open – Darshan Degree College</h4>
          <p className="text-blue-200 text-sm mb-4">Affiliated to Bangalore University. Limited seats available.</p>
          <Link to="/admission"
            className="inline-block bg-maroon hover:bg-red-800 text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  )
}