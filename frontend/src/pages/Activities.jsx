// src/pages/Activities.jsx
import { Link } from 'react-router-dom'
import ban43 from '../assets/13-1.jpg'

// ── Activity data  ────────────────────────────────────────────
// Add your real images to src/assets/ and import them here
// import imgPuDay    from '../assets/activities/pu-day.jpg'
// import imgExcursion from '../assets/activities/excursion.jpg'
// ...

const activities = [
  {
    id: 'anthonian-pu-day',
    title: 'Anthonian PU Day Celebration',
    image: null,            // replace with: imgPuDay
    imagePlaceholder: '🎓',
    content: `The PU Day Celebration at St. Anthony's PU College was held on 31st January 2026 at the college campus with great enthusiasm, joy, and a touch of nostalgia. The event brought together management, faculty, students, and distinguished guests to celebrate the outgoing batch and honor their achievements.
The programme commenced with a graceful Prayer Dance, followed by the Academic Report presented by Rev. Fr. Clement Paul D'Souza, who highlighted the institution's accomplishments during the academic year. Winners of the vibrant Beats & Bites Dance Competition were honored for their creativity and energetic performances. Students who achieved 100% attendance were also recognized, applauded for their consistency, discipline, and commitment.
A special moment of the evening was the introduction of the Guest of Honour, Dr. Lerroy Calvin Noronha, a proud alumnus of SAPUC. Further adding to the celebratory spirit was the distribution of prizes to the Winners and Runners-up of the Anthonian Premier League, along with students who had excelled at the State and District Level in various sports.
The programme then featured the introduction of the Chief Guest, Sri Thimmaiah whose gracious presence elevated the significance of the occasion. One of the highlights of the evening was the series of dance performances by all the PUC sections.
The event concluded on a symbolic and solemn note with the Lighting of the Lamp, followed by the College Pledge and a Prayer of Blessing.`,
  },
  {
    id: 'spectrum-2k25',
    title: 'SPECTRUM 2K25 – A Fest of Flavor and Rhythm',
    image: null,
    imagePlaceholder: '🎭',
    content: `SPECTRUM 2K25 was the annual cultural festival of St. Anthony's PU College. The event showcased incredible talent in music, dance, drama, and art from students across all streams and years. The theme "A Fest of Flavor and Rhythm" captured the spirit of creativity and celebration that defines SAPUC's vibrant campus life.
The festival witnessed enthusiastic participation from students of both I PU and II PU. A wide range of competitions were held including solo singing, group dance, street play, face painting, and literary events. Faculty members and parents graced the occasion with their presence and encouragement.
The Principal, Rev. Fr. Roshan Rosario, felicitated the winners and congratulated all participants for their hard work and dedication. The event reinforced SAPUC's commitment to holistic development beyond academics.`,
  },
  {
    id: 'excursion-2024',
    title: 'Excursion organized by St. Anthony\'s P.U. College',
    image: null,
    imagePlaceholder: '✈️',
    content: `An educational excursion was organized by St. Anthony's P.U. College for students of various streams. The trip provided students with hands-on learning experiences and an opportunity to explore the natural and cultural heritage of our nation.
Students were accompanied by faculty members who ensured a safe and enriching experience. The excursion was designed to complement classroom learning and broaden the students' perspective on history, geography, and social sciences.
The trip fostered teamwork, self-reliance and a spirit of adventure among the participants. Students returned with cherished memories and a renewed enthusiasm for learning.`,
  },
  {
    id: 'apl-season3',
    title: 'Anthonian Premier League (APL) – Season 3',
    image: null,
    imagePlaceholder: '⚽',
    content: `The Anthonian Premier League (APL) Season 3 was conducted as the annual inter-class cricket tournament of St. Anthony's PU College. The tournament fostered sportsmanship, team spirit, and healthy competition among students across all streams and years.
Teams from each section competed in a league format over several weeks. The matches were marked by exciting performances, nail-biting finishes, and outstanding displays of cricketing talent. The tournament was organized by the Sports Committee with dedicated support from the Physical Education staff.
The winning team received the APL Trophy along with certificates at the PU Day Celebration. The tournament has become one of the most anticipated events on the SAPUC sports calendar.`,
  },
  {
    id: 'independence-day-2024',
    title: 'Independence Day Celebration 2024',
    image: null,
    imagePlaceholder: '🇮🇳',
    content: `On the joyous occasion of 78th Independence Day, St. Anthony's PU College and Darshan College joined hands together to celebrate the victory of unity, endurance, and determination. The programme began at 8:30 AM in the college campus with the welcome of our chief guest Prof. Dr. Gayathri Sudheer, Vice-Principal, The Oxford College of Arts and Science.
Rev. Fr. Robin Victor D'Souza, the Director of St. Anthony's Institutions, unfurled the National Flag. The dignitaries were welcomed with the organized and rhythmic march-past by our proud NCC Unit. Cultural programs followed including patriotic songs, dance performances and a skit emphasizing national unity.
The event concluded with a vote of thanks and distribution of sweets to all students and staff. The celebration reaffirmed the college community's commitment to the values of democracy, freedom, and national pride.`,
  },
  {
    id: 'workshop-neet-2024',
    title: 'Workshop on NEET, K-CET & Competitive Exams',
    image: null,
    imagePlaceholder: '📚',
    content: `Success does not come overnight. It's a journey which includes perseverance and patience. You need to be consistent while continuously improving on mistakes until you reach your destination. St. Anthony's PU College organized a workshop for students to have a better knowledge about the NEET/K-CET & other competitive exams on 1st August 2024.
The program was conducted by Prof. Santhosh S V, a well-known Physics Lecturer and a resource person who has been guiding students for decades about the competitive exams. Guest of honor, Rev Fr. Robin Victor D'Souza, the Director of St. Anthony's Institutions, inaugurated the event by an interactive session with students regarding the facts of competitive exams in the current scenario.
The workshop covered exam patterns, preparation strategies, time management techniques and motivational insights. Students found the session highly informative and came away with renewed confidence in their preparation.`,
  },
]

function ActivityCard({ activity }) {
  const paragraphs = activity.content.split('\n').filter(p => p.trim())

  return (
    <div
      className="rounded-lg overflow-hidden mb-6 mx-auto"
      style={{
        background: 'white',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        maxWidth: 1100,
      }}
    >
      <div className="flex flex-col sm:flex-row gap-0">

        {/* Left: Image + title below */}
        <div className="sm:w-[340px] flex-shrink-0">
          <div
            className="overflow-hidden"
            style={{ height: 280, background: '#d0d8e8' }}
          >
            {activity.image ? (
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: '#c8d4e8', fontSize: 72 }}
              >
                {activity.imagePlaceholder}
              </div>
            )}
          </div>
          {/* Title below image */}
          <div className="p-4 text-center">
            <h3 className="font-bold text-[15px] text-gray-800 leading-snug">
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Right: Title + content + button */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          {/* Title (right side top) */}
          <div>
            <h3 className="font-semibold text-[14.5px] text-gray-800 mb-3 leading-snug">
              {activity.title}
            </h3>
            {/* Paragraphs */}
            <div className="space-y-2">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[12.5px] text-gray-600 leading-6">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Click to View More button */}
          <div className="mt-5 text-center">
            <Link
              to={`/activities/${activity.id}`}
              className="inline-block px-6 py-2 text-white text-[13px] font-semibold rounded transition-opacity hover:opacity-90"
              style={{ background: '#1a3974' }}
            >
              Click To View More
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Activities() {
  return (
    <div>

      {/* ── Hero banner (UNCHANGED) ── */}
      <div className="text-center">
        <img src={ban43} alt="Activities and Events" style={{ width: '100%', display: 'block' }} />
      </div>

      
      {/* ── Activity cards section ── */}
      {/* Damask / floral pattern background matching the WP screenshot */}
      <section
        className="py-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f5f0e8'/%3E%3Cpath d='M50 10 C40 20,20 20,10 30 C20 40,20 60,10 70 C20 80,40 80,50 90 C60 80,80 80,90 70 C80 60,80 40,90 30 C80 20,60 20,50 10Z' fill='none' stroke='%23e8dcc8' stroke-width='0.8' opacity='0.5'/%3E%3Cpath d='M50 25 C43 32,32 32,25 40 C32 48,32 62,25 70 C32 78,43 78,50 85 C57 78,68 78,75 70 C68 62,68 48,75 40 C68 32,57 32,50 25Z' fill='none' stroke='%23ddd0b8' stroke-width='0.6' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23e0d4c0' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
          backgroundColor: '#f5f0e8',
        }}
      >
        <div className=" mx-auto px-4 max-w-6xl">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

    </div>
  )
}