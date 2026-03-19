// Run this once to fix short/missing content and encoding issues
// node update_content2.js

const pool = require('./db')
require('dotenv').config()

const fixes = [
  {
    slug: 'test-exam-2025',
    title: 'Commencement of 1st Test Exam – 1st & 2nd PUC',
    content: `The 1st Test Exam for both 1st PUC and 2nd PUC students commenced on July 10th at St. Anthony's PU College. The exams began smoothly and in an orderly manner, with all necessary arrangements in place to ensure fairness and discipline.\n\nThe atmosphere was calm and focused, with students appearing well-prepared. The seamless start of the test reflects the collective efforts of the teaching and non-teaching staff. This assessment marks an important milestone in evaluating the academic progress of students and sets the tone for the upcoming examinations.`
  },
  {
    slug: 'investiture-2025',
    title: 'Investiture Ceremony 2025',
    content: `St. Anthony's PU College organized an Investiture Ceremony on July 30, 2025, a significant occasion where new leaders were vested with responsibilities and powers. The ceremony marked the conferment of authority to the student leaders, entrusting them with crucial roles. This event is essential in teaching students' lifelong skills of leadership, responsibility, and compassion.\n\nBy honouring students with leadership positions, the college reinforces the importance of leadership and provides opportunities for them to develop essential skills. During the ceremony, the President, Rev. Dr. Fr. Charles Furtado, Director of St. Anthony's Institutions, Chief Guest, Rev. Fr. Anthony Raj (Parish Priest – Gangondanahalli), and Principal, Rev. Fr. Roshan Rosario, bestowed sashes and badges upon the student leaders. Rev. Fr. Roshan Rosario administered the oath, where the students pledged to serve the college and fulfil their responsibilities to the best of their abilities.\n\nIn his address, the Chief Guest shared his life experiences, emphasizing the importance of moral values, discipline, and personal growth in shaping one's future and becoming a good leader.`
  },
  {
    slug: 'felicitation-2025',
    title: 'Felicitation for the Anthonian Academic Achievers 2025',
    content: `The Anthonian distinction holders were felicitated on July 29, 2025, for their outstanding performance in the II PU board examination for the academic year 2024-2025. The ceremony honored the Anthonian stars and their parents, who had been a constant source of strength and support for their children through various challenges.\n\nIt was a moment of immense pride for the entire Anthonian family, with 145 distinctions achieved out of 272 students. Notably, SAPUC achieved a remarkable 99.05% pass rate in Science, Commerce, and Arts, recognizing its position as one of the top colleges in Bangalore South District.\n\nThe felicitation ceremony was graced by Rev. Dr. Fr. Paul Melwyn Dsouza (Vice President, Capuchin Education Board). He congratulated the students and their parents, presenting trophies and certificates to the achievers. In his address, he motivated the students to remain focused and strive towards their goals with determination and hard work. He also encouraged them to be proactive, responsible, and courageous in pursuing their passions.\n\nThe lecturers were also felicitated for their dedication and commitment to guiding and motivating the students to excel. Additionally, students who scored centum in various subjects were honored by their respective subject faculties.`
  },
  {
    slug: 'yoga-day-2025',
    title: 'Celebrating International Yoga Day 2025',
    content: `On the occasion of International Yoga Day, St. Anthony's PU College celebrated the ancient practice of yoga on June 24, 2025. Yoga, a transformative practice, embodies the harmony of mind and body, the balance between thought and action, and the unity of restraint and fulfillment.\n\nThe program commenced with the recitation of the OM mantra, followed by a series of asanas, including Surya Namaskara, Ardha Chakrasana, Trikonasana, Vrikshasana, Bhujangasana, Dhanurasana, and Salabhasana.\n\nUnder the expert guidance and supervision of Prof. Srinidhi Siddhartha, Director of Physical Education at SAPUC, students performed the asanas with dedication and intense concentration.\n\nDuring the yoga session, students experienced a sense of relaxation, calmness, and refreshment, letting go of stress. Prof. Srinidhi explained the benefits of each asana, enhancing the students' understanding and practice.`
  },
  {
    slug: 'parent-orientation-2025',
    title: 'Parent Orientation Programme 2025',
    content: `On June 22, 2025, the college organized an orientation program for parents to familiarize them with the curriculum, rules, and regulations of the institution. The program began with a prayer dance and a brief introduction of the faculty members.\n\nDistinguished Anthonian students who excelled in the I PU Final Examination for the academic year 2024-2025 were felicitated with trophies and certificates by the Chief Guest, Rev. Dr. Fr. Charles Furtado, Director of St. Anthony's Institutions.\n\nRev. Dr. Fr. Charles Furtado in his address to the parents emphasized the importance of nurturing children with love and care to build a strong foundation for their future success.\n\nRev. Fr. Roshan Rosario, the Principal, provided a comprehensive overview of the college's rules and regulations. He highlighted the significance of discipline, etiquette, and grooming in contributing to the holistic development of students. The Principal assured parents that the institution would strive to create a safe, secure, and disciplined environment for all students.\n\nThe program concluded with an engaging and informative Q&A session, which provided parents with an opportunity to clarify their queries and concerns.`
  },
  {
    slug: 'student-orientation-2025',
    title: 'Student Orientation Programme 2025-26',
    content: `The program began with an ice-breaking session where students introduced themselves in a fun and personal way, showcasing their creativity with great enthusiasm.\n\nThe program included the introduction of faculty members, giving students a chance to get acquainted with their educators.\n\nStudents were divided into small groups and tasked with setting two common goals, along with strategies to achieve them. Their goals reflected a strong sense of awareness, ambition, and a desire for self-improvement. The session also included an insightful overview of the four personal development zones — comfort zone, fear zone, learning zone, and growth zone — encouraging students to reflect on their current mindset and strive for personal growth.`
  },
  {
    slug: 'inauguration-2025-26',
    title: 'Inauguration of the Academic Year 2025-26 @ St Anthony\'s PU College',
    content: `The academic year 2025-2026 at St. Anthony's PU College was inaugurated with a vibrant and meaningful ceremony on June 2nd, 2025 at 9:30 am. The event began with a prayer dance, followed by the traditional lighting of the lamp, symbolizing the pursuit of knowledge and enlightenment.\n\nA highlight of the event was the felicitation of our new Director, Dr. Rev. Charles Furtado, acknowledging his leadership and welcoming him to St. Anthony's Institutions. The director delivered an inspiring speech, emphasizing the vision and goals for the academic year. He also emphasized on the two aspects to achieve success — "Duty and Discipline."\n\nThe program included the introduction of faculty members, giving students a chance to get acquainted with their educators.\n\nThe institution took a moment to recognize and honor students with 100% attendance. This acknowledgment not only celebrated their discipline and dedication but also served as an inspiration for others to follow in their footsteps. A series of energetic and colorful cultural dances added vibrancy to the occasion.\n\nThe Principal, Rev. Fr. Roshan Rosario, concluded with a detailed briefing on the upcoming academic activities, providing students with a clear roadmap for the year ahead.`
  },
  {
    slug: 'puc-results-2025',
    title: 'St. Anthony\'s PU College 1st PUC Results – Academic Year 2024-25',
    content: `St. Anthony's PU College, Kengeri, has once again demonstrated its commitment to academic excellence with the announcement of the 1st PUC results for the academic year 2024-25. The students have performed exceptionally well, reflecting the dedication of both the faculty and the learners.\n\nThe college has consistently maintained high academic standards, and this year's results further highlight the institution's focus on holistic education. A significant number of students have secured distinction and first-class marks across various streams, showcasing their hard work and determination.\n\nThe management and faculty of St. Anthony's PU College congratulate all the students on their achievements and wish them continued success in the academic year ahead.`
  },
  {
    slug: '1puc-annual-exams-2025',
    title: 'Commencement of 1st PUC Annual Examinations 2025',
    content: `The 1st PUC Annual Examinations mark an important phase for students as they step into higher secondary education.\n\nStudents from Science, Commerce, and Arts streams appeared for their respective subjects, along with compulsory language papers. The exams test their understanding and prepare them for the crucial 2nd PUC board exams. Proper planning, revision, and confidence play a key role in achieving good results.\n\nExams commenced from 15th February to 24th February. Students arrived at the exam centre well-prepared, reflecting the consistent efforts of the faculty throughout the academic year. The college administration ensured all necessary arrangements were in place for a smooth and fair conduct of the examinations.`
  },
  {
    slug: 'beats-bites-2024',
    title: 'Beats & Bites Campus Celebration 2024',
    content: `On November 23rd, St. Anthony's PU College trembled with vibrant energy and laughter as the highly anticipated "Beats and Bites" fest unfolded in grand style. Living up to its name, the event masterfully blended mouth-watering flavours and infectious rhythms, captivating the senses of all attendees.\n\nThe day began with the Food Festival, a tempting paradise for food enthusiasts. Stalls adorned with vibrant decorations showcased a variety of foods, from spicy Indian street food to comforting desserts and refreshing drinks. The students turned into cooking specialists, savouring dishes that represented diverse cultures and tastes.\n\nAs the crowd's cooking cravings were satiated, attention shifted to the Group Dance Competition, which electrified the college campus with its vibrant energy and creativity. The stage came alive as talented dance troupes showcased their skills, mesmerizing the audience with intricate choreography. Each performance was a masterful display of rhythm and movement.\n\nThe grand finale was the Group Singing Competition — an event that perfectly harmonized music and happiness. As the participants took to the stage, their melodious voices blended in perfect symphony, filling the air with an enchanting ambiance of harmony and joy.\n\nBeats and Bites transcended the realm of a mere festival, evolving into an unforgettable experience that harmoniously merged flavours, rhythms, and melodies. This celebration will forever be etched in the hearts of all who attended.`
  },
  {
    slug: 'campus-to-corporate-2024',
    title: 'Seminar on Campus to Corporate',
    content: `Corporate life refers to the stages of growth and development that a company goes through from its inception to its end. The seminar was conducted by Ms. Sahana Mary, Alumna of SAPUC and an associate in Real-estate Accounting, Finance & Accounting.\n\nThe seminar was organized for the commerce students and stressed on the importance of the subjects in daily life and corporate life. She also explained about how commerce education can help students prepare for a career in business and finance, and can lead to many employment opportunities.\n\nStudents found the session highly informative and came away with a clearer understanding of how their academic learning connects to the demands of the corporate world.`
  },
  {
    slug: 'freshers-day-2024',
    title: "Anthonian Freshers' Day 2024",
    content: `Freshers' Day is the first step in a journey filled with excitement and possibilities. The celebration intended to extend a kind welcome to newcomers, enhance the feeling of community, and motivate juniors. The purpose of this day is to meet and welcome the juniors.\n\nThe Chief Guest, Rev. Fr. Richard K, Principal of St. Anthony's Church School, encouraged the students to always walk on the correct path. He mentioned that the journey will be a rollercoaster of emotions and experiences, but most importantly, it will be an opportunity for growth and achievement. His inspiring examples were excellent means to make students understand how to invest one's life and be successful.\n\nThe celebration continued with fun-tasking games and vibrant dances by the II PU students. The seniors showcased with a unique and unforgettable experience that provided the juniors with both learning and enjoyment, creating lasting bonds within the Anthonian family.`
  },
  {
    slug: 'parent-orientation-2024',
    title: 'Parent Orientation Programme 2024',
    content: `The parent orientation programme was conducted on June 29th, 2024 at 9:30 am to guide the parents about the plethora of opportunities provided for the holistic development of the students. The orientation began with a prayer dance and an introduction of the faculty members.\n\nThe Anthonian distinction holders were felicitated for their excellent performance in I PU Final Examination for the year 2023-2024. Chief guest Rev. Fr. Robin Victor D'Souza, Director of St. Anthony's Institutions, felicitated the students with trophies and certificates.\n\nRev. Fr. Robin Victor D'Souza addressed the parents about the commitment of the principal and the faculty members for the growth and development of the students. He urged the parents to make their child aware about all the sacrifices and problems which they undergo in providing for the needs of their children, so that the child does better in their academics and their future.\n\nThe Principal, Rev. Fr. Roshan Rosario, provided an overall description of rules and regulations of the college. He promised to create a disciplined, safe, and secure campus for all its students, which was possible if the parents continued to trust and believe in the institute. It concluded with a healthy, interactive, and purposeful Q&A session which helped parents clarify queries.`
  },
  {
    slug: 'inauguration-2024-25',
    title: 'Inauguration of the Academic Year 2024-25 @ St Anthony\'s PU College',
    content: `The inaugural ceremony of the academic year was held on June 3rd, 2024 at 9:30 am. A very special formal function paved way for the commencement of the new academic year. The minds of I PUC and II PUC students were filled with an incredible expression of faith and divinity as the students performed the prayer dance.\n\nA symbolic moment that signifies the dispelling of darkness, igniting of thought and enlightenment was witnessed by the lighting of the lamp of knowledge and wisdom.\n\nRev. Fr. Roshan Rosario (Principal, SAPUC) addressed the students and introduced them to the new curriculum, co-curricular activities and ways of assessment to be conducted throughout the year. He also briefed the achievements of the college and his perception regarding students for the evolvement of good character as well as academics.\n\nThe Chief Guest, Rev. Fr. Robin Victor D'Souza (Executive Secretary, CEB and Director of St. Anthony's Institutions), encouraged the students to achieve success through constant dedication and determination. He motivated the students to follow the path of honesty and commitment.\n\nII PUC students lit up the auditorium with their splendid dance performances that filled the atmosphere with joy and happiness.`
  },
  {
    slug: 'pu-day-2024',
    title: 'PU Day Celebration and Farewell Programme 2024',
    content: `Farewell is not the end of all the bonds we created over the years but it's a goodbye to the campus life. The awe-inspiring and resplendent celebration of PU Day began at 4:30 pm on 31st January 2024. The entire Anthonian family came together to bid adieu to the students of II PU.\n\nThe graceful and elegantly dressed students embraced the occasion with brightness and elegance. The whole campus was filled with mixed emotions and exuberant feelings. A beautifully decorated selfie stand further enhanced the ambience of the occasion. Rev. Fr. Robin Victor D'Souza, Rev. Fr. Roshan Rosario, Rev. Fr. Joy Wilson D'Souza along with the Chief Guest Syed Mohiuddin Khadri (Alumnus of St. Anthony's PU College) graced the event.\n\nOutstanding performances of the students in various sports and academic activities were recognized with certificates and medals. For the first time in the history of SAPUC, students with 100% attendance were felicitated for their remarkable dedication towards academics. The winners of VIGYAN-2023 were awarded with cash prizes and certificates. National and state level sports players were honoured for their incredible efforts.\n\nStudents from II PUC shared their heartfelt experiences throughout their journey in SAPUC. The students lit candles and prayed for their success and future endeavours. The I PU students organized a variety of cultural items for their dear seniors. The programme ended with a heart touching flash mob by all II PU students and a delicious dinner. Students were gifted with a memento as a token of appreciation.`
  },
]

async function updateContent() {
  const conn = await pool.getConnection()
  try {
    let updated = 0
    let notFound = []

    for (const item of fixes) {
      const [result] = await conn.query(
        'UPDATE activities SET content = ?, title = ? WHERE slug = ?',
        [item.content, item.title, item.slug]
      )
      if (result.affectedRows > 0) {
        updated++
        console.log(`✓ Updated: ${item.slug}`)
      } else {
        notFound.push(item.slug)
        console.log(`✗ Not found: ${item.slug}`)
      }
    }

    console.log(`\nDone. Updated: ${updated}, Not found: ${notFound.length}`)
    if (notFound.length) console.log('Missing slugs:', notFound)
  } finally {
    conn.release()
    pool.end()
  }
}

updateContent().catch(console.error)
