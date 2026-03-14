const facilityItems = [
  {
    title: 'Eco-Friendly Campus',
    icon: '🌿',
    content: 'Green Campus – Healthy Learning! A Green Campus is a place which implements environment friendly practices and education centers to promote sustainable and eco-friendly practices in the campus. St. Anthony\'s Institutions is proud of its eco-friendly campus and eco-friendly environment and campus friendly environment. This provides a healthy ambience at the best time of the day for the learners to develop strong campus living with academics.',
  },
  {
    title: 'Qualified and Dedicated Faculty',
    icon: '👨‍🏫',
    content: 'St. Anthony\'s Institutions has its award-winning faculty drawn from the cream of bright professionals with high academic qualifications who having a genuine love for teaching profession. The Students can expect to receive an education that is not pre-planned education but a full consideration of a full appreciation level of instruction. This is true, caring, and dedicated teaching staff who provide excellent personal achievement and academic excellence.',
  },
  {
    title: 'Sports and Games',
    icon: '⚽',
    content: 'The College has a strong commitment to ensure every student\'s life is well and fully enriched in sports. Physical education is an integral part of the educational programme designed to promote the wellbeing of an individual physically, academically, mentally, socially and spiritually. The college sports activities include, athletics, basketball, volleyball, badminton, hockey, cricket, baseball and other sports. The aim is to spur and give the sport to exist in a larger, better human outcomes through sports and games, to add to the standard\'s resource, leadership qualities, courage and the sense of belonging through sports activities, to use the students to achieve their activities.',
  },
  {
    title: 'Bibliotheque and E-learning Resources',
    icon: '📚',
    content: 'E-library is one of the best strategies of the 21st century with the availability of internet: e-books through from a library for more than time. In the library the hearts of the students to get more knowledge and education. At Anthonian College has a huge library with a good collection of academic reference books. The students are encouraged to go to this library to increase understanding of the subjects. There is also a state of the art counselling providing for learning for themselves.',
  },
  {
    title: 'Advanced Laboratories',
    icon: '🔬',
    content: 'Advancing lab space is essential to generate a sense of equality for students. Introducing with the advancement with the equipment lab supports and services on the academic campuses, understanding the scientific concepts and principles of industry promotions. As a result of laboratory experiences, students\' competence in the laboratory will also be increased. St. Anthony\'s College has well equipped Chemistry, Biology, and Computer Labs that enable Students to have a practical way of understanding the requirements in the academic field and experiment.',
    images: ['Physics Lab', 'Chemistry Lab', 'Computer Lab'],
  },
  {
    title: '24/7 Total Security & CCTV Surveillance',
    icon: '📷',
    content: 'The College has 24/7 Security Personnel to ensure safety and security of the Students. In addition to this, there is a CCTV camera system that is connected to the entire campus which ensures safety and security. The college always ensures a monitoring of the campus. The management has taken more precautions to constitute that our Students are well protected and safeguarded.',
  },
  {
    title: 'Special Music Classes',
    icon: '🎵',
    content: 'Music is all about Soul! To learn St. Anthony\'s Institutions is music, Our College also available music classes to have developed forms. State, from the board and during actual learning in the college. One importance is also given to the students to understand the music and music classes to provide practice to held in a college.',
  },
  {
    title: 'Grand Seminar Hall and Napo Auditorium',
    icon: '🏛️',
    content: 'Audio-visual for College courses can be facilitated with properly. St Anthony\'s PU College has a Seminar Hall to enable learning about Students and Events with meetings and educational activities. The Seminars Hall has more facilities for these subjects. It is acoustically designed and has excellent sound and system and audio. St. Anthony\'s PU College has excellent sound and visual presentation.',
  },
  {
    title: 'Well-Furnished and Spacious Classrooms',
    icon: '🏫',
    content: 'A discussion facility helps every student to learn and feel there in there. St. Anthony\'s College is equipped with speakers, and academic activities. Comfortable classroom facilities to make the student, feel very comfortable and enjoyable. Well-furnished spacious classrooms and most comfortable in the student, the students can be comfortable very nice. We have the highest quality of education for our students.',
  },
  {
    title: 'Hostel Facilities for Boys and Girls',
    icon: '🏠',
    content: 'In order of creating a homely atmosphere and helping those distant places, the college provides excellent hostel facilities. The hostel takes the educational needs of the students and that helps and encourages the quality of education. The Hostel is on the campus of the college itself with a design canteen which follows with the requirements of the Students.',
  },
  {
    title: 'College Canteen',
    icon: '🍽️',
    content: 'Within the premises of the College there is our Canteen to open meals to the Students. Our Canteen is open for the Students as well as for those. The Canteen is a capacity for all the Schools as well as for those who are the daily meals.',
  },
  {
    title: 'Counselling Facilities',
    icon: '🧠',
    content: 'The college always cares for the needs and wellbeing of the students. Highly qualified and caring counsellors are made available to speak to and guide all students. Students regularly are being given their major concerns and problems to these counselors in need. The college has a full time qualified and trained, and very trained. The college has all the counselors in place, and provides training for those groups or students. No person can approach the College to address a specific group and end.',
  },
  {
    title: 'Prayer Hall',
    icon: '🙏',
    content: 'A prayer room provides mental development of individuals, the design promotes a serene and idyllic atmosphere to those who seek to spend some time for prayer, reflection and prayer. The prayer are is elegantly designed and placed in Kendriyar which suits much the character, moral formation of students.',
  },
]

export default function Facilities() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-navy to-maroon text-white py-10 text-center">
        <h1 className="text-3xl font-bold tracking-widest uppercase font-display">FACILITIES</h1>
      </div>

      {/* Banner */}
      <div className="bg-navy text-white text-center py-3">
        <h2 className="text-xl font-bold tracking-widest text-teal uppercase italic">FACILITIES</h2>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {facilityItems.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Image side */}
                <div className="md:w-1/3 bg-gradient-to-br from-navy to-maroon flex items-center justify-center min-h-[180px] text-white">
                  <div className="text-center p-6">
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <p className="font-bold text-sm text-teal">{item.title}</p>
                    {item.images && (
                      <div className="flex gap-2 mt-3 flex-wrap justify-center">
                        {item.images.map((img) => (
                          <span key={img} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">{img}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-maroon font-bold text-base uppercase tracking-wide mb-3 border-b border-gray-200 pb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-7">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
