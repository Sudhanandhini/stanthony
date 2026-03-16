// src/pages/about/StAnthonyInstitutions.jsx
import PageHero from '../components/PageHero'

export default function StAnthonyInstitutions() {
  const units = [
    {
      title: "St. Anthony's Pre-University College",
      icon: '🎓',
      color: '#1a3974',
      desc: "Offering PUC Science, Commerce and Arts streams with special coaching for CET, NEET, and JEE. Recognised by the Government of Karnataka.",
    },
    {
      title: 'Darshan Degree College',
      icon: '🏛️',
      color: '#0288d1',
      desc: "Affiliated to Bangalore University, offering B.Com, BBA, BCA and BA programmes. Dedicated to providing quality higher education.",
    },
    {
      title: 'Darshan College Hostel',
      icon: '🏠',
      color: '#6a1b9a',
      desc: "Comfortable and secure hostel facilities for outstation students. Provides a home away from home with mess, recreation and study rooms.",
    },
  ]

  return (
    <div>
      <PageHero
        title="ST ANTHONY'S INSTITUTIONS"
        breadcrumb={['Home', 'About Us', "St Anthony's Institutions"]}
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">Welcome to</p>
          <h2 className="text-2xl font-bold text-navy mb-4">St. Anthony's Institutions, Kengeri, Bengaluru</h2>
          <div className="w-16 h-1 bg-maroon mb-6 rounded-full" />

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-gray-700 text-sm leading-7 text-justify">
                St. Anthony's Institutions, Bangalore is run by the Capuchin Franciscan Fathers of the Holy
                Trinity Province of Karnataka. It was established in 2009 to provide the best in academics
                for students in Science, Commerce, Computers, Business Management, and Administration by
                preparing them to qualify and succeed in various highly competitive career streams.
              </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
                It includes St. Anthony's Pre-University College, Darshan Degree College, and Darshan College
                Hostel. It's a home away from home, with excellent hostel facilities, infrastructure and
                dedicated teaching staff who mould, mend and form the future of the Nation and of the Globe.
              </p>
              <p className="text-gray-700 text-sm leading-7 text-justify">
                It has a learning environment and a fraternal ambiance where one feels welcomed and
                comfortable. It's an institution which treats everyone equally with respect and honor
                regardless of gender, religion, ethnic origin and nationality. The Education imparted in
                this institute is an ongoing process and continuous commitment for the emancipation of
                the humankind.
              </p>
            </div>

            {/* Info card */}
            <div className="lg:w-64 flex-shrink-0 space-y-3">
              {[
                { label: 'Established',    value: '2009' },
                { label: 'Managed by',     value: 'Capuchin Franciscan Fathers' },
                { label: 'Location',       value: 'Kengeri, Bengaluru - 560060' },
                { label: 'Recognised by',  value: 'Govt. of Karnataka' },
                { label: 'Phone',          value: '080-29741973 / 94489 49867' },
                { label: 'Email',          value: 'stanthonybangalore@gmail.com' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2 text-sm border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-semibold min-w-[110px]">{label}:</span>
                  <span className="text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Units */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">Our Institutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {units.map((u) => (
              <div
                key={u.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-2" style={{ background: u.color }} />
                <div className="p-6">
                  <div className="text-4xl mb-3">{u.icon}</div>
                  <h4 className="font-bold text-navy text-sm mb-2 leading-snug">{u.title}</h4>
                  <p className="text-gray-600 text-xs leading-6">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-10 bg-[#1a3974]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                heading: 'Our Vision',
                icon: '👁️',
                text: 'To be a premier institution of holistic education nurturing young minds to become responsible citizens, competent professionals and compassionate human beings guided by Franciscan values.',
              },
              {
                heading: 'Our Mission',
                icon: '🎯',
                text: 'To impart quality education that integrates academic excellence with moral formation, equipping students with knowledge, skills and values to lead purposeful lives in service of society.',
              },
            ].map(({ heading, icon, text }) => (
              <div key={heading} className="text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{icon}</span>
                  <h4 className="text-lg font-bold text-teal-300">{heading}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}