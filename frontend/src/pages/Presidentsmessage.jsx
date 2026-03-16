// src/pages/about/PresidentsMessage.jsx
import PageHero from '../components/PageHero'

export default function PresidentsMessage() {
  return (
    <div>
      <PageHero
        title="PRESIDENT'S MESSAGE"
        breadcrumb={['Home', 'About Us', "President's Message"]}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Photo card */}
            <div className="lg:w-64 flex-shrink-0 mx-auto lg:mx-0">
              <div className="bg-[#1a3974] rounded-xl overflow-hidden shadow-lg">
                {/* Photo */}
                <div className="bg-gray-200 flex items-center justify-center" style={{ height: 280 }}>
                  <img
                    src="/images/president.jpg"
                    alt="Rev. Fr. Robin Victor D'Souza"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentNode.innerHTML = `
                        <div style="padding:40px;text-align:center;color:#999">
                          <div style="font-size:72px">👤</div>
                        </div>`
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-white font-bold text-sm leading-snug">
                    Rev. Fr. Robin Victor D'Souza
                  </p>
                  <p className="text-teal-300 text-xs mt-1">
                    Director, St. Anthony's Institutions
                  </p>
                  <p className="text-blue-200 text-[11px] mt-0.5">
                    Capuchin Franciscan Fathers
                  </p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex-1">
              <p className="text-[#0288d1] font-extrabold text-sm uppercase tracking-widest mb-1">
                A Message from the Director
              </p>
              <h2 className="text-2xl font-bold text-navy mb-1">
                Rev. Fr. Robin Victor D'Souza
              </h2>
              <p className="text-gray-500 text-sm italic mb-6">
                Director, St. Anthony's Institutions, Kengeri, Bengaluru
              </p>

              <div className="space-y-4 text-gray-700 text-sm leading-7 text-justify">
                <p>
                  Dear Students, Parents, and Well-wishers,
                </p>
                <p>
                  It gives me great pleasure to welcome you to St. Anthony's Institutions – a vibrant
                  community of learning, faith and service. Our institution was born out of a dream to
                  provide quality education rooted in Franciscan values to the young people of Kengeri
                  and beyond.
                </p>
                <p>
                  Since our establishment in 2009, we have remained committed to our motto of
                  <em> "To Educate... To Empower... To Explore... To Excel..."</em> We believe that
                  education is not merely the transfer of knowledge, but the formation of the whole
                  person – intellectually, morally, spiritually and socially.
                </p>
                <p>
                  Our qualified and dedicated faculty, modern infrastructure, and holistic programmes
                  ensure that every student receives the best possible foundation for their future. We
                  take pride in the achievements of our students in academics, sports, arts and
                  competitive examinations like CET, NEET and JEE.
                </p>
                <p>
                  I invite you to be part of this great family. Together, let us build a future where
                  each young person discovers their potential, contributes to society, and lives a life
                  of purpose and integrity.
                </p>
                <p>
                  God bless you all.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="font-bold text-navy">Rev. Fr. Robin Victor D'Souza</p>
                  <p className="text-[#0288d1] text-xs mt-0.5">Director, St. Anthony's Institutions</p>
                  <p className="text-gray-500 text-xs">Capuchin Franciscan Fathers, Holy Trinity Province</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-xl font-bold text-navy mb-8 text-center">
            Principal's Message
          </h3>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 space-y-4 text-gray-700 text-sm leading-7 text-justify">
              <p>Dear Students and Parents,</p>
              <p>
                Welcome to St. Anthony's Pre-University College. As Principal, I am proud to lead an
                institution that stands for excellence, integrity and character. Our college is not
                just a place of learning – it is a home where young minds are nurtured, inspired and
                equipped for the challenges of tomorrow.
              </p>
              <p>
                We have a team of highly qualified and committed teachers who invest not only in the
                academic growth of students, but also in their overall personality development. Our
                results in Board examinations and competitive tests like CET, NEET and JEE stand
                testimony to the hard work of our students and faculty alike.
              </p>
              <p>
                I encourage every student to make the most of the opportunities available here –
                academic, co-curricular and spiritual. Remember, success belongs to those who dream
                big and work with discipline and determination.
              </p>
              <div className="pt-3 border-t border-gray-200">
                <p className="font-bold text-navy">Rev. Fr. Roshan Rosario</p>
                <p className="text-[#0288d1] text-xs mt-0.5">
                  Principal, St. Anthony's Pre-University College
                </p>
              </div>
            </div>

            {/* Quote highlight */}
            <div className="lg:w-64 flex-shrink-0">
              <div
                className="rounded-xl p-6 text-white relative overflow-hidden"
                style={{ background: '#1a3974' }}
              >
                <span
                  className="absolute top-2 left-3 text-7xl font-serif leading-none"
                  style={{ color: 'rgba(255,255,255,0.1)', fontFamily: 'Georgia, serif' }}
                >"</span>
                <p className="text-blue-100 text-sm leading-6 italic relative z-10 mt-4">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p className="text-teal-300 text-xs font-bold mt-4">— W.B. Yeats</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}