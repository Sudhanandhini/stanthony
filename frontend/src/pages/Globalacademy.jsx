// src/pages/courses/GlobalAcademy.jsx
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function GlobalAcademy() {
  return (
    <div>
      <PageHero
        title="ST. ANTHONY'S GLOBAL ACADEMY"
        breadcrumb={['Home', 'Courses', "St. Anthony's Global Academy"]}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">Courses Offered</p>
          <h2 className="text-2xl font-bold text-navy mb-4">St. Anthony's Global Academy</h2>
          <div className="w-16 h-1 bg-maroon mb-6 rounded-full" />

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 space-y-4 text-gray-700 text-sm leading-7 text-justify">
              <p>
                St. Anthony's Global Academy is a premier institution under the St. Anthony's Institutions
                umbrella, offering world-class programmes designed to prepare students for global careers
                and opportunities in diverse professional fields.
              </p>
              <p>
                The Academy focuses on skill development, personality enhancement, and academic rigour,
                combining traditional classroom learning with practical exposure through industry
                partnerships and internship programmes.
              </p>
              <p>
                With state-of-the-art infrastructure, qualified mentors and a global outlook, St. Anthony's
                Global Academy stands as a beacon of quality education in Bengaluru.
              </p>
            </div>

            {/* Quick info */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-[#0288d1] rounded-xl p-5 text-white space-y-3">
                <h4 className="font-bold text-sm uppercase tracking-wider text-center mb-4">Key Highlights</h4>
                {[
                  'Global Curriculum',
                  'Industry Partnerships',
                  'Internship Programmes',
                  'Career Guidance',
                  'Soft Skills Training',
                  'Modern Infrastructure',
                ].map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs border-b border-white/20 pb-2">
                    <span className="text-yellow-300">✦</span> {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1a3974]">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-white font-bold text-lg mb-3">Interested in Global Academy?</h4>
          <Link to="/admission"
            className="inline-block bg-maroon hover:bg-red-800 text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm">
            Enquire Now →
          </Link>
        </div>
      </section>
    </div>
  )
}