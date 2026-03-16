// src/pages/about/AboutTrust.jsx
import PageHero from '../components/PageHero'

const leaders = [
  {
    title: 'Provincial Superior',
    name: 'Rev. Fr. Vincent D\'Souza OFM Cap',
    desc: 'Holy Trinity Province of Karnataka, Capuchin Franciscan Fathers.',
    icon: '✝️',
    color: '#6a1b9a',
  },
  {
    title: 'Director, St. Anthony\'s Institutions',
    name: "Rev. Fr. Robin Victor D'Souza",
    desc: "Oversees the operations of St. Anthony's Institutions, ensuring quality education and Franciscan values.",
    icon: '🏛️',
    color: '#1a3974',
  },
  {
    title: "Principal, St. Anthony's PU College",
    name: 'Rev. Fr. Roshan Rosario',
    desc: 'Leads St. Anthony\'s Pre-University College with dedication, academic rigor and pastoral care.',
    icon: '🎓',
    color: '#0288d1',
  },
  {
    title: 'Principal, Darshan Degree College',
    name: 'Rev. Fr. Joy Wilson D\'Souza',
    desc: 'Guides Darshan Degree College with focus on holistic development of students at the undergraduate level.',
    icon: '📚',
    color: '#2e7d32',
  },
]

export default function AboutTrust() {
  return (
    <div>
      <PageHero title="ABOUT TRUST" breadcrumb={['Home', 'About Us', 'About Trust']} />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">
            About the Trust
          </p>
          <h2 className="text-2xl font-bold text-navy mb-4">
            Capuchin Franciscan Fathers – Holy Trinity Province
          </h2>
          <div className="w-16 h-1 bg-maroon mb-6 rounded-full" />

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-gray-700 text-sm leading-7 text-justify">
                St. Anthony's Institutions is managed by the Capuchin Franciscan Fathers of the Holy
                Trinity Province of Karnataka. The Capuchin Franciscan Order is a religious order within
                the Catholic Church, following the way of life of St. Francis of Assisi. The Order is
                known for its simplicity, humility, and service to the poor and marginalized.
              </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
                The Holy Trinity Province of Karnataka was formally erected as an independent Province
                on 8 December 1992. With its headquarters in Bengaluru, the Province engages in various
                apostolic works including education, parish ministry, missions, social work and healthcare.
              </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
                In the field of education, the Province runs several institutions across Karnataka and
                beyond, dedicated to providing quality education inspired by Franciscan values – love,
                peace, simplicity and care for creation. St. Anthony's Institutions in Kengeri is a
                flagship educational initiative of the Province.
              </p>
            </div>

            {/* Values card */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="bg-[#1a3974] rounded-xl p-5 text-white">
                <h4 className="font-bold text-sm mb-4 text-center text-teal-300 uppercase tracking-wider">
                  Franciscan Values
                </h4>
                {['Love & Compassion','Humility & Simplicity','Service to Society','Care for Creation','Justice & Peace','Fraternal Living'].map((v) => (
                  <div key={v} className="flex items-center gap-2 py-2 border-b border-white/10 text-xs">
                    <span className="text-teal-400">✦</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">Our Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((l) => (
              <div key={l.name} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition-shadow text-center">
                <div className="h-2" style={{ background: l.color }} />
                <div className="p-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 text-white font-bold"
                    style={{ background: l.color }}
                  >
                    {l.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: l.color }}>
                    {l.title}
                  </p>
                  <h4 className="font-bold text-navy text-xs mb-2 leading-snug">{l.name}</h4>
                  <p className="text-gray-500 text-[11px] leading-5">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-8 bg-maroon">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-center">
            {[
              { v: '1992', l: 'Province Erected' },
              { v: '2009', l: 'Institutions Founded' },
              { v: '5000+', l: 'Students Served' },
              { v: '15+', l: 'Years of Excellence' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="text-2xl font-bold text-white">{v}</div>
                <div className="text-xs text-pink-100 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}