const leadership = [
  { name: 'Rev. Fr. Robin Victor D\'Souza', role: 'President, St. Anthony\'s Institutions', qual: 'B.Ed, M.ph(France), MBA' },
  { name: 'Rev. Fr. Charles J R Furtado', role: 'Executive Secretary – Capuchin Education Board\nDirector, St. Anthony\'s Institutions', qual: '' },
  { name: 'Rev. Fr. Roshan Rosario', role: 'Principal, St. Anthony\'s PU College', qual: 'B.Ph., B.Th., M.A. (Eco)' },
  { name: 'Rev. Fr. Joy Wilson D\'Souza', role: 'Principal, St. Anthony\'s College', qual: 'M.Com, MBA' },
]

const coreValues = ['Faith in God', 'Respect for Life', 'Moral Uprightness', 'Social Responsibility', 'Pursuit of Excellence']

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-navy to-maroon text-white py-10 text-center">
        <h1 className="text-3xl font-bold tracking-widest uppercase font-display">ST ANTHONY'S INSTITUTIONS</h1>
      </div>

      {/* About Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-maroon uppercase tracking-wide mb-2">ABOUT ST ANTHONY'S INSTITUTIONS</h2>
              <p className="text-maroon italic text-sm mb-4">"A Unique Campus for Quality Education & Academic Excellence"</p>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                St. Anthony's Institutions, Bangalore, is run by the Capuchin Franciscan Fathers of the Holy Trinity Province of Karnataka. It was established in 2009 to provide the best in academics for students in Science, Commerce, Computers, Business Management, and Administration by preparing them to qualify and succeed in various highly competitive career streams.
              </p>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                It includes St. Anthony's Pre-University College, Darshan Degree College, Darshan College Hostel. It's a home away from home, with excellent hostel facilities, infrastructure, and dedicated teaching staff who mould, mend and form the future of the Nation and of the Globe.
              </p>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                It has a learning environment and a fraternal ambience where one feels welcomed and comfortable. It's an institution that treats everyone equally with respect and honor regardless of gender, religion, ethnic origin, and nationality. The Education imparted in this institution is an ongoing process and continuous commitment to the emancipation of humankind.
              </p>
              <p className="text-gray-500 text-xs italic mt-2">
                "An abode of wisdom that ensures HOLISTIC DEVELOPMENT to the Leaders of Tomorrow..."
              </p>

              {/* Motto, Vision, Mission */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Motto', content: 'Jnanenaiva Vimukti\nLiberation through Enlightenment' },
                  { title: 'Vision', content: 'Empowering youth towards Excellence through Holistic Education.' },
                  { title: 'Mission', content: 'To enable the students to become responsible global citizens with their dynamic personality, intrinsic reverence for life and a passionate love for learning.' },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 border-l-4 border-maroon p-4 rounded-r">
                    <h3 className="text-maroon font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h3 className="text-navy font-bold text-base mb-3">Core Values</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {coreValues.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-teal rounded-full flex-shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic Excellence */}
              <div className="mt-8">
                <h3 className="text-navy font-bold text-base mb-2">Academic Excellence</h3>
                <p className="text-gray-600 text-sm leading-7">
                  The main objectives of the College are to promote the pursuit of intellectual growth, for understanding the natural and social environments as well as developing the moral and spiritual values so to enable them to face life situations. Our effort to provide an education that combines intellectual growth with the development of social, personal, and moral values. The college has a Reading Room, E-Learning Resource Centre, and a Good Library.
                </p>
              </div>

              {/* Character Formation */}
              <div className="mt-6">
                <h3 className="text-navy font-bold text-base mb-2">Character Formation</h3>
                <p className="text-gray-600 text-sm leading-7">
                  Character Development is the essential aspect of education. A person is what his/her values are. The time in college is the period when you have to build up your character: hard work, perseverance, honesty, integrity, sensitivity to others, and universal love that embraces all people cutting across barriers of language, religion, and caste.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 bg-navy text-white rounded-lg p-6 text-center">
                <p className="text-lg italic text-teal mb-2">"Great dreams of great dreamers are always transcended"</p>
                <p className="text-gray-300 text-sm">- Dr. Abdul Kalam</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                <div className="bg-maroon text-white text-center font-bold py-2 text-sm">OUR CAMPUS</div>
                <div className="p-4 bg-gradient-to-br from-navy to-maroon h-48 flex items-center justify-center text-white text-center">
                  <div>
                    <div className="text-4xl mb-2">🏫</div>
                    <p className="font-semibold text-sm">St. Anthony's Institutions</p>
                    <p className="text-xs text-teal mt-1">Kengeri, Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-maroon text-center uppercase tracking-wide mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-navy to-maroon h-32 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-3xl">👤</div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-navy text-sm">{person.name}</h4>
                  {person.qual && <p className="text-gray-500 text-xs mt-0.5">{person.qual}</p>}
                  <p className="text-teal-dark text-xs font-semibold mt-2 whitespace-pre-line leading-tight">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
