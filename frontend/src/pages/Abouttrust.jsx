// src/pages/about/AboutTrust.jsx
import ban13 from '../assets/trust2.0.jpg'

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
   
           <div className=" text-center">
              <img src={ban13} />
               </div>
   
      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 max-w-5xl">
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
                There is only one Education, and it has only one goal: the freedom of the mind. Anything that needs an adjective, be it civics education, or socialist education, or Christian education, or whatever-you-like education, is not education in the general sense, as it can have different goals. The very existence of modified "educations" is testimony to the fact that their proponents cannot bring about what they want in a mind that is free. An "education" that cannot do its work in a free mind, and so must "teach" by homily and precept in the service of these feelings and attitudes and beliefs rather than those, is pure and unmistakable tyranny - Richard Mitchell,


              </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
              

The words of the underground Grammarian, Mr. Richard Mitchell is in place and power in it. The inspiring and outgoing desire, the burning bush flame and the heart throbbing impulses of the concerned and to be corned of the periphery or the cry of the outer ring of the society was an awakening timely call to the capuchins of the Holy Trinity Province to hanker into their boat into the education field. The fruit of the long awaited wish of the millions of the society and the distant dream of our elders emerged in the four walls of the schools. The beauty and the mind meet in the capuchin education board.
              </p>

            <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">
            motto
          </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
              The Motto of Capuchin Education Board (CEB) is: jnanenaiva vimuktih: "Indeed, Liberation is through enlightenment". As the temporal, mundane existence is characterized by the experience of bondage (samsara) ignorance (avidya) and pain (duhkha), the eminent sages and prophets have propagated means to alleviate oneself from tha above negative experiences of human existence, and fill life with hope and joy. The fullness of existence is characterised by Liberation attained through true knowledge, which is an experience of enlightenment.
              </p>

                <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">
        The Function of Capuchin Education Board:
          </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
             The Capuchin Education Board functions under the supervision of Provincial Minister and his Definitory. The Education ministry of the Province is teamwork of all the friars involved in the ministry. The ministry constitutes one single unit with one goal, one ideal and one system of organisation that goes to make one single tradition.
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
        <div className="max-w-6xl mx-auto px-4 max-w-5xl">
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
      {/* <section className="py-8 bg-maroon">
        <div className="max-w-6xl mx-auto px-4 max-w-4xl">
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
      </section> */}
    </div>
  )
}