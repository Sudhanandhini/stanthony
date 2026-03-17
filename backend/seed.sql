-- Run this after importing stanthon_santho.sql
-- Creates a clean activities table from the WordPress data

CREATE TABLE IF NOT EXISTS `activities` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(200) NOT NULL,
  `title` VARCHAR(500) NOT NULL,
  `image` VARCHAR(1000) NOT NULL,
  `content` TEXT NOT NULL,
  `activity_date` DATE,
  `sort_order` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `activities`;

INSERT INTO `activities` (`slug`, `title`, `image`, `content`, `activity_date`, `sort_order`) VALUES

('anthonian-pu-day-2026', 'Anthonian PU Day Celebration',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/03/IMG-20260201-WA0010.jpg',
'The PU Day Celebration at St. Anthony\'s PU College was held on 31st January 2026 at the college campus with great enthusiasm, joy, and a touch of nostalgia. The event brought together management, faculty, students, and distinguished guests to celebrate the outgoing batch and honor their achievements.\nThe programme commenced with a graceful Prayer Dance, followed by the Academic Report presented by Rev. Fr. Clement Paul D\'Souza, who highlighted the institution\'s accomplishments during the academic year. Winners of the vibrant Beats & Bites Dance Competition were honored for their creativity and energetic performances.\nStudents who achieved 100% attendance were also recognized, applauded for their consistency, discipline, and commitment. A special moment of the evening was the introduction of the Guest of Honour, Dr. Lerroy Calvin Noronha, a proud alumnus of SAPUC.',
'2026-01-31', 1),

('excursion-2025', 'Excursion organized by St. Anthony\'s P.U. College',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-07-at-11.09.24-AM-1-scaled.jpeg',
'Excursion organized by St. Anthony\'s P.U. College. The college phase is one of the most interesting stages in life with plenty of opportunities to explore, grow and deep dive into the ocean of new beginnings and possibilities. Academics, cultural activies, annual day, sports day, P.U. day and not to forget the most awaited college trip.\nForeigners often remark India as a land of temples, shrines of diversity and culture. What could be better than giving the opportunity to our students to explore the sacred places, nature, and beaches. A round trip to Dhandeli, Gokarna, Murdeshwara and Udupi began at the dusk of 26th November 2025 with 176 students, 11 staff members accompanied by the principal Rev. Fr. Roshan Rosario.\nKayaking, Boating, swimming, Zorbing, Rain Dance were the various activities that the students indulged in Dhandeli. The enchanting temples of Gokarna, Murdeshwara and the breath-taking views of the beaches that surround them was an enticing experience.\nMalpe was the last destination but wasn\'t the least of the expectations. All good things come to an end, so did our three-day action-packed vacation. With a promise to extend this thrilling experience to our future batch of students, St. Anthony\'s Institutions called a halt to outdoor amusements for the year.',
'2025-11-26', 2),

('christmas-2025', 'Christmas Celebration 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-07-at-11.08.47-AM-1.jpeg',
'Christmas inspires the spirit of sharing and caring. We the Anthonians gathered together on 23rd December 2025. Rev. Fr. Sandeep D\'Souza addressed the students spreading the message of love and joy.\nThough we hail from different religious traditions, we will not allow ourselves to be blinded by hatred or violence. The celebration reflected the inclusive and vibrant culture of the institution, with carol singing, nativity play performances, and cultural programs organized by the students.',
'2025-12-23', 3),

('spectrum-2k25', 'SPECTRUM 2K25 – A Fest of Flavor and Rhythm',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/IMG-20251229-WA0029.jpg',
'St. Anthony\'s PU College proudly organized the Inter-School Dance Competition, Spectrum 2025, on 13th November 2025. The event witnessed enthusiastic participation from numerous schools, making it a grand platform for young talents to celebrate the art of dance.\nParticipants were judged on choreography, synchronization, expression, costumes, and overall stage presence. The festival showcased incredible talent in music, dance, drama, and art from students across all streams and years.',
'2025-11-13', 4),

('beats-bites-2025', 'Beats & Bites – Campus Celebration – Ignite the vibe of color and culture',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/IMG-20251229-WA0027.jpg',
'St. Anthony\'s PU College hosted its much-anticipated campus celebration, Beats and Bites on 14th November 2025. The celebration began with a formal inauguration ceremony followed by a special felicitation and farewell programme.\nThe college grounds came alive with the sounds of music and laughter as students and faculty came together to celebrate the spirit of unity and creativity. Food stalls, games, and performances made it a memorable day for all who attended.',
'2025-11-14', 5),

('seminar-ai-2025', 'Seminar on Artificial Intelligence & Robotics at Christ University',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/IMG-20251220-WA0006.jpg',
'St. Anthony\'s PU College organized a seminar for science students at Christ University from 17th–19th November 2025. Students explored the Robotics Lab, Foundry Lab, and the Engine and Truck Parts Assembly Lab during the three-day program hosted by the AI and Mechanical Engineering departments.\nThe students gained valuable knowledge about AI, machine learning, robotics, and the future of technology. The seminar inspired many students to explore careers in STEM fields.',
'2025-11-17', 6),

('directors-birthday-2025', 'Director\'s Birthday Celebration',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/IMG-20251104-WA0020.jpg',
'The birthday of Rev. Dr. Fr. Charles Furtado, Director of St. Anthony\'s Institutions, was celebrated with great joy on 4th November 2025. The celebration began with a short prayer and brought together management, faculty, and staff from both PU and Degree sections.',
'2025-11-04', 7),

('annual-sports-meet-2025', 'Annual Sports and Athletics Meet 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/12/download-79.jpg',
'Anthonian Annual Athletic Meet was conducted on 6th and 7th November 2025. Team events were held on the 6th, and the official Sporthathon and Athletic Meet was inaugurated on 7th November 2025.\nChief guest: Mr. Vinay Kumar T S (Sports Co-ordinator, Vidya Nikethan School). Students competed in track and field events, relay races, and team sports, celebrating fitness, determination, and the competitive spirit of the Anthonians.',
'2025-11-06', 8),

('apl-season3', 'Anthonian Premier League (APL) – Season 3',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/12/download-53.jpg',
'St. Anthony\'s PU College organized APL Season 3 to encourage young talent. Six teams from different classes were formed during APL auction by team captains, icon players and team owners. The opening ceremony was held on 30th October 2025.\nThe tournament fostered sportsmanship, team spirit, and healthy competition among students across all streams and years. The winning team received the APL Trophy along with certificates at the PU Day Celebration.',
'2025-10-30', 9),

('kabaddi-tournament-2025', 'District Level Kabbaddi (Girls) Tournament',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/11/IMG-20250912-WA0026.jpg',
'St. Anthony\'s PU College organized a district Kabaddi tournament (Girls) on 12th September 2025. More than 40 teams from various colleges participated. Inaugurated by Dr. Sundar Raj Arasu (HOD of Physical Education, Bangalore North).\nThe tournament provided a platform for young female athletes to showcase their talent and competitive spirit.',
'2025-09-12', 10),

('independence-day-2025', 'Independence Day Celebration 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/08/download-2025-08-26T151219.184-1.jpg',
'The 79th Independence Day of India was celebrated with great enthusiasm on August 15, 2025. Chief Guest Mr. Sugun Paul Coelho, Reliability Engineer & Regional Public Relations Officer, hoisted the National Flag.\nThe NCC Unit performed an impressive march-past followed by patriotic songs, dance performances, and a skit emphasizing national unity. The celebration reaffirmed the college community\'s commitment to the values of democracy, freedom, and national pride.',
'2025-08-15', 11),

('test-exam-2025', 'Commencement of 1st Test Exam – 1st & 2nd PUC',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-10.04.42-AM-1.jpeg',
'The 1st Test Exam for both 1st PUC and 2nd PUC students commenced on July 10th at St. Anthony\'s PU College. The atmosphere was calm and focused, reflecting collective efforts of the teaching and non-teaching staff.',
'2025-07-10', 12),

('investiture-2025', 'Investiture Ceremony 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/07/IMG-20250630-WA0079-scaled.jpg',
'St. Anthony\'s PU College organized the Investiture Ceremony on July 30, 2025, where new leaders were vested with responsibilities and powers. The ceremony reinforces the importance of leadership and provides opportunity for students to develop lifelong skills.',
'2025-07-30', 13),

('felicitation-2025', 'Felicitation for the Anthonian Academic Achievers 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/IMG-20250628-WA0035_21_11zon.jpg',
'The Anthonian distinction holders were felicitated on July 29, 2025, for their outstanding performance in the II PU board examination 2024-2025. SAPUC achieved a remarkable 99.05% pass rate, with 145 distinctions out of 272 students.',
'2025-07-29', 14),

('yoga-day-2025', 'Celebrating International Yoga Day 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/IMG-20250622-WA0002_1_11zon.jpg',
'On the occasion of International Yoga Day, St. Anthony\'s PU College celebrated on June 24, 2025. The program commenced with the recitation of the OM mantra, followed by asanas including Surya Namaskara, Ardha Chakrasana, Trikonasana, Vrikshasana, Bhujangasana, Dhanurasana, and Salabhasana.\nThe celebration reinforced the college\'s commitment to holistic education and the promotion of healthy lifestyle practices among students.',
'2025-06-24', 15),

('parent-orientation-2025', 'Parent Orientation Programme 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/IMG-20250621-WA0028_1_11zon.jpg',
'On June 22, 2025, the college organized an orientation program for parents to familiarize them with the curriculum, rules, and regulations. Distinguished Anthonian students who excelled in the I PU Final Examination 2024-2025 were felicitated with trophies and certificates by Rev. Dr. Fr. Charles Furtado.',
'2025-06-22', 16),

('student-orientation-2025', 'Student Orientation Programme 2025-26',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/10.jpg',
'The program began with an ice-breaking session where students introduced themselves in a fun and personal way. Students were divided into small groups and faculty members were introduced. The programme covered academic expectations and college rules, helping new students feel at home.',
'2025-06-01', 17),

('inauguration-2025-26', 'Inauguration of the Academic Year 2025-26',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/1.jpg',
'The academic year 2025-2026 was inaugurated on June 2nd, 2025 at 9:30 am with a prayer dance and traditional lighting of the lamp. A highlight was the felicitation of the new Director, Dr. Rev. Charles Furtado.\nThe director delivered an inspiring address to students and faculty, outlining the vision and goals for the academic year and urging students to strive for excellence in academics and co-curricular activities.',
'2025-06-02', 18),

('puc-results-2025', 'St. Anthony\'s PU College 1st PUC Results 2024-25',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/04/St_Anthonys_PU_College_20250330_165930_00001.jpg',
'St. Anthony\'s PU College, Kengeri, once again demonstrated its commitment to academic excellence with the announcement of the 1st PUC results for 2024-25. The students performed exceptionally well, reflecting the dedication of both faculty and learners.',
'2025-03-30', 19),

('staff-picnic-2025', 'Staff Picnic: Delhi, Agra and Jaipur 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/03/jainpr.jpg',
'The faculty members embarked on an exciting staff picnic from March 21st to March 24th, 2025, exploring Delhi, Agra, and Jaipur. Day 1 explored Delhi (Red Fort, Qutub Minar, India Gate); Day 2 included the Taj Mahal in Agra; Days 3-4 covered Jaipur (Amber Fort, Hawa Mahal, Jantar Mantar).',
'2025-03-21', 20),

('1puc-annual-exams-2025', 'Commencement of 1st PUC Annual Examinations 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/02/acti.jpg',
'The 1st PUC Annual Examinations mark an important phase as students step into higher secondary education. Exams commenced from 15th February to 24th February. Students from Science, Commerce, and Arts streams appeared for their respective subjects.',
'2025-02-15', 21),

('pu-day-2025', 'PU Day Celebration at St. Anthony\'s PU College 2025',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/02/pu-day-1.jpg',
'St. Anthony\'s PU College organised PU Day on 1st February 2025. The farewell day was a heartfelt and memorable event filled with emotions, gratitude, and celebration. The juniors put up vibrant and energetic dance performances as tokens of appreciation for their seniors.',
'2025-02-01', 22),

('christmas-2024', 'Christmas Celebration 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/02/IMG-20241223-WA0110.jpg',
'The Anthonians came together on 23rd December 2024, to re-live and re-enact the scene of Christmas. The celebration commenced with a prayer dance followed by the recreation of the birth of Jesus. Joyfully celebrated by students from different religious traditions.',
'2024-12-23', 23),

('academic-excursion-2024', 'Academic Excursion 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/01/academic-excersion.jpg',
'Educational excursions provide students with hands-on learning experiences. The excursion was organized from 27th November 2024 to 1st December 2024, accompanied by 12 faculty members including the Principal. The trip fostered teamwork, self-reliance and a spirit of adventure among the participants.',
'2024-11-27', 24),

('kannada-rajyotsava-2024', 'Kannada Rajyotsava Celebration 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/12/IMG-20241116-WA0071.jpg',
'Kannada Rajyotsava was celebrated on 25th November 2024 with great enthusiasm at St. Anthony\'s PU College. The programme was presided by the Director. Students performed Kannada songs, skits and dance highlighting the rich culture and heritage of Karnataka.',
'2024-11-25', 25),

('beats-bites-2024', 'Beats & Bites Campus Celebration 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/12/IMG-20241123-WA0068.jpg',
'St. Anthony\'s PU College hosted its campus celebration Beats and Bites in 2024. The event brought together students, faculty and management in a vibrant celebration of music, food, and culture on the college campus.',
'2024-11-23', 26),

('athletic-meet-2024', 'Anthonian Athletic Meet 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/12/antho-ath-2024.jpg',
'The Anthonian Athletic Meet 2024 was a spectacular display of sporting talent and physical prowess. Students competed in various track and field events, relay races, and team sports. The meet was a celebration of fitness, determination, and the competitive spirit of the Anthonians.',
'2024-11-01', 27),

('apl-season2', 'Anthonian Premier League (APL) – Season 2',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/11/an-1.jpg',
'The Anthonian Premier League Season 2 built on the success of its inaugural edition, bringing more excitement and competitive cricket to the college campus. The tournament fostered sportsmanship, team spirit, and healthy competition among students across all streams.',
'2024-10-01', 28),

('swachh-bharat-2024', 'Swachh Bharat Abhiyan & International Democracy Day',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/11/an.jpg',
'St. Anthony\'s PU College observed Swachh Bharat Abhiyan and International Democracy Day. Students participated in cleanliness drives and awareness programs reinforcing civic responsibility and democratic values.',
'2024-10-02', 29),

('campus-to-corporate-2024', 'Seminar on Campus to Corporate',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/10/IMG-20241017-WA0029.jpg',
'A seminar on Campus to Corporate was organized to help students understand the transition from academic life to professional life. Industry experts shared insights on communication skills, workplace etiquette, and career readiness.',
'2024-10-17', 30),

('ball-badminton-2024', 'District Level Ball Badminton & Net Ball Tournament 2024-25',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/09/sports.jpg',
'St. Anthony\'s PU College hosted the District Level Ball Badminton and Net Ball Tournament for the academic year 2024-25. Teams from various colleges across the district participated in this competitive tournament held on the college grounds.',
'2024-09-01', 31),

('independence-day-2024', 'Independence Day Celebration 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/08/independence-day-2024.jpg',
'On the joyous occasion of 78th Independence Day, St. Anthony\'s PU College and Darshan College joined hands to celebrate the victory of unity, endurance, and determination. Chief Guest: Prof. Dr. Gayathri Sudheer, Vice-Principal, The Oxford College of Arts and Science.\nRev. Fr. Robin Victor D\'Souza, the Director, unfurled the National Flag. The NCC Unit performed an impressive march-past followed by patriotic songs, dance performances, and a skit emphasizing national unity.',
'2024-08-15', 32),

('workshop-neet-2024', 'Workshop on NEET, K-CET & Competitive Exams 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/08/IMG-20240801-WA0055.jpg',
'St. Anthony\'s PU College organized a workshop for students on 1st August 2024 to have better knowledge about NEET/K-CET & other competitive exams. The program was conducted by Prof. Santhosh S V, a well-known Physics Lecturer who has been guiding students for decades.\nThe workshop covered exam patterns, preparation strategies, time management techniques and motivational insights.',
'2024-08-01', 33),

('freshers-day-2024', 'Anthonian Freshers\' Day 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/07/fresher-day.jpg',
'The II PU students organized Freshers\' Day 2024 for the new batch of students. The event helped the freshers get acquainted with the college environment, faculty, and their fellow students. Cultural performances by seniors added to the festive atmosphere.\nThe Principal extended a heartfelt welcome to the new batch and encouraged them to make the most of their college years.',
'2024-07-01', 34),

('parent-orientation-2024', 'Parent Orientation Programme 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/07/bharatanatyam.jpg',
'The college organized an orientation program for parents in 2024 to familiarize them with the curriculum, rules, and regulations of the institution. Faculty members introduced their respective subjects and interacted with parents about their wards\' academic progress.',
'2024-07-01', 35),

('inauguration-2024-25', 'Inauguration of the Academic Year 2024-25',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/06/img8.webp',
'The academic year 2024-25 was inaugurated with a grand ceremony at St. Anthony\'s PU College. The event marked the beginning of a new academic journey for the freshly admitted students. The inauguration included lighting of the lamp and motivational speeches to inspire the new batch.',
'2024-06-01', 36),

('pu-day-2024', 'PU Day Celebration and Farewell Programme 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/02/farewell.webp',
'St. Anthony\'s PU College organised PU Day and Farewell Programme for the outgoing batch of 2024. The event was filled with emotions, gratitude, and celebration as juniors bid farewell to their seniors with vibrant performances and heartfelt messages.',
'2024-02-01', 37),

('science-exhibition-2024', 'Vigyan – Science Exhibition 2024',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/photo-gallery/Science_Exhibition_2024/img-20231216-wa0065.webp',
'In order to boost imagination, creativity and innovation in students, the Management of St Anthony\'s Institutions organized Vigyan - Science Exhibition. Many students in groups enthusiastically participated. The judges (Ms. Shruthi and Mr. Manjunath) inaugurated Vigyan by performing a small experiment.',
'2023-12-16', 38),

('christmas-2023', 'Christmas Celebration 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/photo-gallery/Christhmas_Programme_2023/img-20231223-wa0132.webp',
'Christmas reminds us of God giving himself selflessly to humanity. Christmas celebration was held at St. Anthony\'s Institutions. The Christ-event was enacted through music, carols, dance and tableau. Chief Guest: Rev. Fr. Robin Victor D\'Souza, OFM Cap., Executive Secretary, CE.',
'2023-12-23', 39),

('kannada-rajyotsava-2023', 'Kannada Rajyotsava Celebration 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/photo-gallery/Kannada_Rajyotsava_2023/img-20231126-wa0150-2.webp',
'Kannada Rajyotsava 2023 was celebrated on 25th November at St. Anthony\'s PU College. The programme was presided by the Director. Students performed Kannada songs, skits and dance highlighting the rich culture and heritage of Karnataka.',
'2023-11-25', 40),

('beats-bites-2023', 'Beats & Bites Campus Celebration 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/B1.jpg',
'Beats & Bites - Campus Celebration organized on 25th November 2023 included music, dance, delicious food stalls and entertainment games conducted by students under the leadership of class mentors. Featured cultural events including Music and songs by Usha Kokila & Team and dance by Samskruthi.',
'2023-11-25', 41),

('athletic-meet-2023', 'Anthonian Athletic Meet 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/aam9.jpg',
'Anthonian Annual Athletic Meet was conducted from 9th–11th November 2023. Day 1: Team Events (Kabaddi, Volley Ball, KhoKho, Throw Ball). Day 2: Official inauguration by Chief Guest Mr. Muniraju, Physical Education Convenor Bangalore South District, and Rev. Fr. Robin Victor D\'Souza.',
'2023-11-09', 42),

('apl-2023', 'Anthonian Premier League (APL) 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/apl1.jpg',
'For the first time in the history of St. Anthony\'s PU College, the Physical Education Department introduced cricket in the new format called "Anthonian Premier League" (APL). Six teams were formed during APL auction by team captains, icon players and team owners. Inaugurated on 15th November by Rev. Fr. Robin, Director.',
'2023-11-15', 43),

('girls-welfare-2023', 'Girls Welfare Programme 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/gwp4.jpg',
'The Girls Welfare Committee conducted a talk on 10th November 2023. Speaker: Mrs. Dhanushree, founder and trustee of Aarunya Seva Trust, Bengaluru. Topics: girl\'s health and hygiene, disadvantages of overusage of mobiles, value education, and respecting parents.',
'2023-11-10', 44),

('felicitation-2023', 'Felicitation for the Anthonian Academic Achievers 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/10/IMG-20230702-WA0049.jpg',
'Felicitation ceremony of the Anthonian distinction holders in the II PU board examination 2022-23, held on 1st July. A day of honor, appreciation, encouragement and motivation for Anthonian stars and their parents.',
'2023-07-01', 45),

('counselling-session-2023', 'Counselling Session – Grateful Guidance 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/09/IMG-20230817-WA0038.jpg',
'The Girls Welfare Committee organized "Grateful Guidance" a Counselling Session. Mrs. Roslin Richard, a Well-Known Counselor from St. Joseph School CBSE Bangalore, conducted the one-day session. Topics: Mental Health, Hygiene, and appropriate use of social media.',
'2023-08-17', 46),

('constitution-day-2023', 'Celebrating Constitution Day 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/09/IMG-20230915-WA0031.jpg',
'On 19th September 2023, St. Anthony\'s PU College celebrated Constitution Day as per the directions of the State Government. The Preamble of the Indian Constitution was read in both Kannada and English.',
'2023-09-19', 47),

('parents-orientation-2023', 'Parents Orientation Program 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/07/20230617-090346-64a66555253e6.webp',
'An orientation program for parents was organized on 17th June 2023. The program commenced with a prayer dance and brief introduction of faculty members. Science, Commerce and Arts faculty introduced their respective subjects.',
'2023-06-17', 48),

('yoga-day-2023', 'Celebrating International Yoga Day 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/07/IMG-20230704-WA0088.jpg',
'St. Anthony\'s PU College embraced yoga on 21st June (International Yoga Day), proposed by PM Narendra Modi and acknowledged by the United Nations. One of the college\'s priorities is to provide a holistic approach to health and well-being of students.',
'2023-06-21', 49),

('freshers-day-2023', 'Fresher\'s Day 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/07/IMG-20230704-WA0048.png',
'The II PU students organized Fresher\'s Day for new arrivals in 2023. Welcoming hundreds of new faces with a million dreams to an ocean of knowledge. Bonhomie is the key ingredient for success and cultivates a sense of belongingness.',
'2023-07-04', 50),

('investiture-2023', 'Investiture Ceremony 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/07/IMG_0027.png',
'SAPUC organized the Investiture Ceremony on 19th June 2023. Investiture means a formal investing of a person with authority, power, right, office and dignity. Leaders are not born; they are made. The ceremony gives a good start to activities for the academic year.',
'2023-06-19', 51),

('inauguration-2023-24', 'Inauguration of the Academic Year 2023-24',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-01-at-16.03.40.jpeg',
'The Inauguration ceremony began with a prayer dance by the II PU students followed by lighting of the lamp. Faculty members gave brief introductions of their subjects. Students were introduced to their new curriculum for the academic year 2023-24.',
'2023-06-01', 52),

('science-exhibition-2023', 'Vigyan – Science Exhibition 2023',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/02/20221217_101505.jpg',
'Science begins with wonder and rational thinking. St. Anthony\'s P.U. College organized Vigyan, the Science Exhibition, providing a platform for students to use their scientific knowledge. Students worked together in groups, sharing ideas and bringing innovative concepts to implementation.',
'2022-12-17', 53),

('kannada-rajyotsava-2022', 'Karunaada Darshana 2.0 – Karnataka Rajyotsava 2022',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2022/12/4.jpeg',
'Karnataka Rajyostava celebrated on 1st November every year. St. Anthony\'s Institutions celebrated this auspicious episode to honor Karnataka\'s Heritage, Culture and Language with Karunaada Darshana 2.0.',
'2022-11-01', 54),

('flowers-competition-2022', 'Flowers Arrangement Competition 2022',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2022/11/IMG_20221015_102353-min.jpg',
'To enhance the attitude of appreciating flower beauty, St. Anthony\'s PU College organised a flower arranging competition. Participants brought a variety of colourful and magnificent flowers and created beautiful arrangements.',
'2022-10-15', 55),

('cooking-competition-2022', 'Chefs in the Making – Cooking Competition 2022',
'https://www.stanthonyscollege.edu.in/wp-content/uploads/2022/11/IMG_20220903_105356-min.jpg',
'In a society where instant cooking is gaining prominence, St. Anthony\'s PU College called for a cooking competition to encourage students to find joy in the kitchen. 20 groups of three students each fought for first position. Judged by Mrs. Shanthala & Prof. Tazeer.',
'2022-09-03', 56);
