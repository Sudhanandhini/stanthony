// Run this once to update all activities with full content from the database
// node update_content.js

const pool = require('./db')
require('dotenv').config()

const fullContent = [
  {
    slug: 'cooking-competition-2022',
    title: '"Chefs in the Making @ St. Anthony\'s PU College "',
    content: `Cooking is like painting or writing a song. Just as there are only so many notes or colours, there are so many flavours – it's how you combine them that sets you apart. In a society where instant cooking is gaining prominence, St. Anthony's PU College called for a cooking competition to encourage students to find joy in kitchen. Right amount of ingredients put together in love, makes the best of recipes. Many students zealously took part in the event in groups of three. There were totally 20 groups fighting tooth and nail for the first position. Mrs. Shanthala & Prof. Tazeer, were the jury members who after tasting every one of the cuisines adjudged the winners. Cooking requires confident guesswork and improvisation – experimentation and substitution, dealing with failure and uncertainty in a creative way.`
  },
  {
    slug: 'flowers-competition-2022',
    title: '"Flowers arrangement competition @ St. Anthony\'s PU College"',
    content: `'Flowers have the greatest talent in converting an ordinary place into a magical palace'. Flowers whisper the beauty to the world, even as they fade, wilt and fall. In order to enhance the attitude of appreciating the beauty of flowers among students, the Management of St. Anthony's PU College organised flower arranging competition. The participants brought a variety of colourful and magnificent flowers, and bedecked them in attractive and awe-inspiring order. The judges adjudged the best flower arrangement among all the splendid display. The creative arrangement of flowers struck the aesthetic eyes of the jury and gained their praise. May every student be like a flower that is unique, has its own splendid fragrance and beauty to share with the world around.`
  },
  {
    slug: 'kannada-rajyotsava-2022',
    title: 'Karunaada Darshana 2.0 – Karnataka Rajyotsava 2022',
    content: `Karnataka Rajyostava is celebrated on 1st November every year to commemorate the formation of Karnataka state on 1st November 1956. St. Anthony's Institutions (Darshan College and St. Anthony's P.U. College) celebrated this auspicious episode to honour Karnataka's Heritage, Culture and Language. The celebration highlighted the rich history of Karnataka and the importance of the Kannada language in preserving the state's cultural identity. Students performed Kannada songs, folk dances, and skits that depicted the glorious history and traditions of Karnataka.`
  },
  {
    slug: 'science-exhibition-2023',
    title: 'Vigyan – Science Exhibition 2023',
    content: `Science begins with wonder and rational thinking. St. Anthony's P.U. College organized Vigyan, the Science Exhibition, providing a platform for students to use their scientific knowledge. Students worked together in groups sharing ideas and bringing innovative concepts to implementation. Each group researched and designed science models and experiments that demonstrated their understanding of various scientific principles. The exhibition encouraged students to think critically and apply classroom knowledge to real-world problems. The event was appreciated by faculty, parents, and guests who visited the exhibition and were impressed by the creativity and depth of knowledge displayed.`
  },
  {
    slug: 'inauguration-2023-24',
    title: 'Inauguration of the Academic Year 2023-24 @ St Anthony\'s PU College',
    content: `The Inauguration ceremony for the Academic Year 2023-24 began with a prayer dance by the II PU students followed by lighting of the lamp. Faculty members gave brief introductions of their subjects and course outlines to the newly admitted students. The Principal, Rev. Fr. Roshan Rosario, welcomed the new batch and outlined the vision and goals for the academic year. Students were introduced to the college's rules, facilities, and the opportunities available to them. The ceremony set a positive tone for the academic year ahead, inspiring students to strive for excellence in academics and co-curricular activities.`
  },
  {
    slug: 'investiture-2023',
    title: 'Investiture Ceremony 2023 @ SAPUC',
    content: `SAPUC organized the Investiture Ceremony on 19th June 2023. Investiture means a formal investing of a person with authority, power, right, office and dignity. Leaders are not born; they are made. This ceremony is a formal occasion for the newly elected student leaders to take charge of their responsibilities with dignity and commitment. The newly elected Student Council members were adorned with badges and sashes by the Principal and Management. The new leaders pledged to uphold the values of the institution and serve their fellow students with dedication and integrity. The ceremony gives a good start to activities for the academic year and inspires all students to aspire to leadership roles.`
  },
  {
    slug: 'freshers-day-2023',
    title: 'Fresher\'s Day 2023 @ St Anthony\'s PU College',
    content: `The II PU students organized Fresher's Day for the new arrivals in 2023. Welcoming hundreds of new faces with a million dreams to an ocean of knowledge. Bonhomie is the key ingredient for success and cultivates a sense of belongingness. The seniors organized a series of fun activities, cultural performances, and games to help the freshers break the ice and feel at home in their new college. The event was a wonderful mix of entertainment and education as seniors shared their experiences and tips for navigating college life successfully. The day concluded with a vote of thanks and a celebration that left the freshers with cherished memories and new friendships.`
  },
  {
    slug: 'yoga-day-2023',
    title: 'Celebrating International Yoga Day 2023',
    content: `St. Anthony's PU College embraced yoga on 21st June, International Yoga Day, proposed by PM Narendra Modi and acknowledged by the United Nations. One of the college's priorities is to provide a holistic approach to health and well-being of students. The Yoga session was conducted for students and staff, with trained instructors guiding participants through various asanas and breathing exercises. The session highlighted the physical, mental, and spiritual benefits of regular yoga practice. Students and teachers participated with great enthusiasm, discovering the calming and rejuvenating effects of yoga. The event reinforced the college's commitment to nurturing not just academic excellence but also the overall wellness of its students.`
  },
  {
    slug: 'parents-orientation-2023',
    title: 'Parents Orientation Program 2023 @ St Anthony\'s PU College',
    content: `An orientation program for parents was organized on 17th June 2023. The program commenced with a prayer dance and brief introduction of faculty members. Science, Commerce and Arts faculty introduced their respective subjects and course requirements to the parents. The Principal addressed the gathering and explained the college's academic expectations, rules, and the support systems available for students. Parents were given an opportunity to interact with teachers and ask questions about the curriculum and examination patterns. The programme helped establish a strong parent-teacher relationship that is essential for the holistic development of students.`
  },
  {
    slug: 'constitution-day-2023',
    title: 'Celebrating Constitution Day 2023',
    content: `On 19th September 2023, St. Anthony's PU College celebrated Constitution Day as per the directions of the State Government. The Preamble of the Indian Constitution was read in both Kannada and English. The event was organized to create awareness among students about the importance of the Constitution and the fundamental rights and duties of citizens. Faculty members spoke about the significance of the Constitution in upholding democracy and justice in India. The celebration instilled a sense of civic responsibility and pride in the students, reminding them of the values upon which the nation was built.`
  },
  {
    slug: 'counselling-session-2023',
    title: '"Grateful Guidance" – Counselling Session 2023',
    content: `The Girls Welfare Committee organized "Grateful Guidance", a Counselling Session on 17th August 2023. Mrs. Roslin Richard, a Well-Known Counselor from St. Joseph School CBSE Bangalore, conducted the one-day session for both boys and girls – Morning Session for girls, afternoon session for boys. Topics covered included Mental Health, Hygiene, and appropriate use of social media. The session provided students with practical tools and strategies for managing stress, building positive relationships, and making responsible choices. Students found the session highly interactive and informative, gaining valuable insights for their personal and academic growth.`
  },
  {
    slug: 'felicitation-2023',
    title: 'Felicitation for the Anthonian Academic Achievers 2023',
    content: `Felicitation ceremony of the Anthonian distinction holders in the II PU board examination 2022-23 was held on 1st July 2023. A day of honor, appreciation, encouragement and motivation for Anthonian stars and their parents. The outstanding students who secured distinctions were felicitated with trophies, medals, and certificates by the Principal and Management. The ceremony recognized the hard work and dedication of both students and teachers who contributed to these impressive results. Parents and students were deeply moved by the recognition and expressed their gratitude to the institution for providing quality education and guidance.`
  },
  {
    slug: 'girls-welfare-2023',
    title: 'Girls Welfare Programme 2023',
    content: `The Girls Welfare Committee conducted a talk on 10th November 2023. Speaker: Mrs. Dhanushree, founder and trustee of Aarunya Seva Trust, Bengaluru. Topics covered: girl's health and hygiene, disadvantages of overusage of mobiles, value education, and respecting parents. The session provided practical advice and insights to help young women navigate the challenges of adolescence and college life. Students were encouraged to take care of their physical and mental health, use technology responsibly, and maintain strong values. The programme was well-received by the students who appreciated the candid and informative discussion.`
  },
  {
    slug: 'apl-2023',
    title: 'Anthonian Premier League (APL) 2023',
    content: `For the first time in the history of St. Anthony's PU College, the Physical Education Department introduced cricket in the new format called "Anthonian Premier League" (APL). Six teams were formed during APL auction by team captains, icon players and team owners. The opening ceremony was inaugurated on 15th November 2023 by Rev. Fr. Robin Victor D'Souza, Director of St. Anthony's Institutions. The format resembled the IPL with team names, jerseys, and cheerleaders, making it an exciting and memorable event. Each team comprised students from different classes and streams, fostering inter-class bonding and sportsmanship. The tournament concluded with an exciting final match and the winners were felicitated at the Annual Athletic Meet.`
  },
  {
    slug: 'athletic-meet-2023',
    title: 'Anthonian Athletic Meet 2023',
    content: `Anthonian Annual Athletic Meet was conducted from 9th–11th November 2023. Day 1: Team Events (Kabaddi, Volley Ball, KhoKho, Throw Ball). Day 2: Official inauguration by Chief Guest Mr. Muniraju, Physical Education Convenor Bangalore South District, and Rev. Fr. Robin Victor D'Souza, Director of St. Anthony's Institutions. Day 3: Individual track and field events including sprints, long jump, shot put, and relay races. Students from all streams participated enthusiastically, showcasing their athletic abilities. The meet culminated in a prize distribution ceremony where winners were honored with trophies and medals. The event successfully promoted the spirit of sportsmanship and healthy competition among students.`
  },
  {
    slug: 'beats-bites-2023',
    title: 'Beats & Bites Campus Celebration 2023',
    content: `Beats & Bites - Campus Celebration, organized on 25th November 2023, included music, dance, delicious food stalls and entertainment games conducted by students under the leadership of class mentors. Featured cultural events including Music and songs by Usha Kokila & Team and dance by Samskruthi. The college campus was transformed into a vibrant carnival with colorful decorations, mouthwatering food counters, and electrifying performances. The event brought together students, faculty, and management in a joyful celebration that highlighted the diverse talents of the Anthonian community. It was a day filled with laughter, music, and memories that will be cherished for years to come.`
  },
  {
    slug: 'kannada-rajyotsava-2023',
    title: 'Kannada Rajyotsava Celebration 2023',
    content: `ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ (Kannada Rajyotsava) was celebrated with great enthusiasm at St. Anthony's PU College on 25th November 2023. The programme was presided by the Director, Rev. Fr. Robin Victor D'Souza. Students performed Kannada songs, folk dances, and skits that depicted the glorious history and rich cultural heritage of Karnataka. The event highlighted the importance of the Kannada language in preserving the state's cultural identity. Prizes were distributed to winners of various Kannada language competitions conducted as part of the month-long celebrations. The day served as a reminder of Karnataka's proud history and the collective responsibility of citizens to protect and promote the Kannada language and culture.`
  },
  {
    slug: 'christmas-2023',
    title: 'Christmas Celebration 2023',
    content: `Christmas reminds us of God giving himself selflessly to humanity. Christmas celebration was held at St. Anthony's Institutions. The Christ-event was enacted through music, carols, dance and tableau. Chief Guest: Rev. Fr. Robin Victor D'Souza, OFM Cap., Executive Secretary, CE. The celebration began with a prayer service followed by the nativity play enacted by students who portrayed the birth of Jesus with great reverence and artistry. Carol singers filled the hall with the joyful spirit of the season. The event reinforced the message of love, peace, and goodwill that Christmas embodies, bringing together students of all faiths in a spirit of unity and celebration.`
  },
  {
    slug: 'science-exhibition-2024',
    title: 'Vigyan – Science Exhibition 2024',
    content: `In order to boost imagination, creativity and innovation in students, the Management of St Anthony's Institutions organized Vigyan - Science Exhibition on 16th December 2023. Many students in groups enthusiastically participated. The judges Ms. Shruthi and Mr. Manjunath inaugurated Vigyan by performing a small experiment. Students presented working models and experiments on topics ranging from renewable energy and environmental science to robotics and chemistry. The exhibition drew appreciation from faculty, parents, and visiting students for the depth of research and creativity displayed. The event reinforced the importance of STEM education and hands-on learning in developing future innovators and scientists.`
  },
  {
    slug: 'workshop-neet-2024',
    title: 'Workshop on NEET, K-CET & Competitive Exams 2024',
    content: `Success does not come overnight. It's a journey which includes perseverance and patience. You need to be consistent while continuously improving on mistakes until you reach your destination. St. Anthony's PU College organized a workshop for students to have better knowledge about NEET/K-CET & other competitive exams on 1st August 2024.\nThe program was conducted by Prof. Santhosh S V, a well-known Physics Lecturer and resource person who has been guiding students for decades about competitive exams. Guest of Honor, Rev Fr. Robin Victor D'Souza, Director of St. Anthony's Institutions, inaugurated the event with an interactive session with students regarding the facts of competitive exams in the current scenario.\nThe workshop covered exam patterns, preparation strategies, time management techniques and motivational insights. Students found the session highly informative and came away with renewed confidence in their preparation for competitive exams.`
  },
  {
    slug: 'independence-day-2024',
    title: 'Independence Day Celebration 2024',
    content: `On the joyous occasion of 78th Independence Day, St. Anthony's PU College and Darshan College joined hands together to celebrate the victory of unity, endurance, and determination. The programme began at 8:30 AM in the college campus with the welcome of our chief guest Prof. Dr. Gayathri Sudheer, Vice-Principal, The Oxford College of Arts and Science.\nRev. Fr. Robin Victor D'Souza, the Director of St. Anthony's Institutions, unfurled the National Flag. The dignitaries were welcomed with the organized and rhythmic march-past by our proud NCC Unit. Cultural programs followed including patriotic songs, dance performances and a skit emphasizing national unity.\nThe event concluded with a vote of thanks and distribution of sweets to all students and staff. The celebration reaffirmed the college community's commitment to the values of democracy, freedom, and national pride.`
  },
  {
    slug: 'ball-badminton-2024',
    title: 'District Level Ball Badminton & Net Ball Tournament 2024-25',
    content: `St. Anthony's PU College hosted the District Level Ball Badminton and Net Ball Tournament for the academic year 2024-25. Teams from various colleges across the district participated in this competitive tournament held on the college grounds. The tournament was a platform for student athletes to showcase their sporting talent at the district level. The matches were marked by exciting performances and high-quality play. The college management and faculty extended full support to ensure the smooth conduct of the tournament. The event reinforced St. Anthony's PU College's reputation as a hub for sporting excellence and its commitment to promoting sports alongside academics.`
  },
  {
    slug: 'swachh-bharat-2024',
    title: 'Swachh Bharat Abhiyan & International Democracy Day 2024',
    content: `St. Anthony's PU College observed Swachh Bharat Abhiyan and International Democracy Day. Students participated in cleanliness drives around the college campus and surrounding areas, reinforcing civic responsibility. The Swachh Bharat initiative was marked by students and faculty joining hands to clean the college premises, plant saplings, and spread awareness about the importance of cleanliness and environmental conservation.\nInternational Democracy Day was observed with discussions on the importance of democratic values and responsible citizenship. Students were encouraged to exercise their rights and fulfill their duties as responsible citizens of a democratic nation.`
  },
  {
    slug: 'academic-excursion-2024',
    title: 'Academic Excursion 2024',
    content: `Educational excursions provide students with hands-on learning experiences beyond the confines of the classroom. The academic excursion was organized from 27th November 2024 to 1st December 2024, with 12 faculty members including the Principal accompanying the students.\nThe trip provided students with an opportunity to explore the natural landscapes, historical monuments, and cultural heritage of the destinations visited. Students engaged in various learning activities that complemented their classroom studies in geography, history, and social sciences.\nThe excursion fostered teamwork, self-reliance, and a spirit of adventure among the participants. Students returned with enriched perspectives, cherished memories, and a renewed enthusiasm for learning. The experience contributed significantly to their holistic development beyond academics.`
  },
  {
    slug: 'kannada-rajyotsava-2024',
    title: 'Kannada Rajyotsava Celebration 2024',
    content: `ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಕಾರ್ಯಕ್ರಮ (Kannada Rajyotsava Programme) was celebrated on 25th November 2024 (Saturday) with great enthusiasm at St. Anthony's PU College. The programme was presided by the Director. Students performed Kannada songs, folk dances, and skits highlighting the rich culture and heritage of Karnataka.\nThe celebration paid tribute to the Kannada language and the proud history of Karnataka, encouraging students to take pride in their linguistic and cultural heritage. Prizes were distributed to winners of Kannada language competitions. The day reinforced the collective responsibility of every citizen to protect and promote the Kannada language and culture for future generations.`
  },
  {
    slug: 'athletic-meet-2024',
    title: 'Anthonian Athletic Meet 2024',
    content: `The Anthonian Athletic Meet 2024 was a spectacular showcase of sporting talent and physical prowess. Students competed in various track and field events, relay races, kabaddi, volleyball, kho-kho, and throwball. The meet was inaugurated by the Principal and distinguished guests and witnessed enthusiastic participation from students of all streams.\nThe meet was a celebration of fitness, determination, and the competitive spirit of the Anthonians. Winners were felicitated with trophies, medals, and certificates. The Principal and Management encouraged all participants to continue pursuing sports alongside academics, emphasizing the importance of physical fitness for overall well-being.`
  },
  {
    slug: 'apl-season2',
    title: 'Anthonian Premier League (APL) – Season 2',
    content: `The Anthonian Premier League Season 2 built on the tremendous success of its inaugural edition, bringing even more excitement and competitive cricket to the college campus. Six teams were formed during the APL auction with team captains, icon players, and team owners from different classes and streams.\nThe tournament fostered sportsmanship, team spirit, and healthy competition among students. The matches were marked by exciting performances, nail-biting finishes, and outstanding displays of cricketing talent. The format closely followed the IPL model with team jerseys, enthusiastic cheerleaders, and live commentary, making every match an electrifying experience. The tournament concluded with an exciting final match and grand prize distribution ceremony.`
  },
  {
    slug: 'christmas-2024',
    title: 'Christmas Celebration 2024',
    content: `The Anthonians came together on 23rd December 2024, to re-live and re-enact the scene of Christmas. The celebration commenced with a prayer dance followed by the recreation of the birth of Jesus through a beautifully choreographed nativity play. Rev. Fr. Sandeep D'Souza delivered an inspiring Christmas message emphasizing the values of love, peace, and compassion that define the Christmas spirit.\nJoyfully celebrated by students from different religious traditions, the event was a testament to the inclusive and harmonious culture of St. Anthony's PU College. Carol singing, special prayers, and cultural performances added to the festive atmosphere. The celebration concluded with the distribution of sweets and gifts, spreading Christmas joy throughout the campus.`
  },
  {
    slug: 'pu-day-2025',
    title: 'PU Day Celebration at St. Anthony\'s PU College 2025',
    content: `St. Anthony's PU College organised PU Day on 1st February 2025. The farewell day was a heartfelt and memorable event filled with emotions, gratitude, and celebration. The juniors put up vibrant and energetic dance performances as tokens of appreciation for their seniors who are stepping out into the next chapter of their lives.\nThe programme featured speeches by distinguished guests, the Academic Report by the Vice Principal, and felicitation of outstanding students. Outgoing students were recognized for their achievements in academics, sports, and co-curricular activities. The Principal, Rev. Fr. Roshan Rosario, delivered an inspiring farewell address, wishing the outgoing batch success in all their future endeavors. The event was a beautiful send-off filled with warmth, good wishes, and unforgettable memories.`
  },
  {
    slug: 'staff-picnic-2025',
    title: 'Staff Picnic 2025: Delhi, Agra and Jaipur',
    content: `The faculty members of St. Anthony's PU College embarked on an exciting staff picnic from March 21st to March 24th, 2025, exploring the golden triangle of Delhi, Agra, and Jaipur.\nDay 1 – Delhi: The group visited iconic landmarks including the Red Fort, Qutub Minar, India Gate, and Lotus Temple, experiencing the historical grandeur of India's capital city.\nDay 2 – Agra: The highlight was a visit to the magnificent Taj Mahal, one of the Seven Wonders of the World, along with Agra Fort and Fatehpur Sikri.\nDays 3 & 4 – Jaipur: The Pink City welcomed the group with visits to Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar, offering a glimpse into Rajasthan's royal heritage. The trip was a memorable bonding experience for the faculty, creating lasting memories and strengthening collegial bonds.`
  },
  {
    slug: 'independence-day-2025',
    title: 'Independence Day Celebration 2025',
    content: `The 79th Independence Day of India was celebrated with great enthusiasm and patriotic fervor at St. Anthony's PU College on August 15, 2025. The Chief Guest, Mr. Sugun Paul Coelho, Reliability Engineer & Regional Public Relations Officer, graced the occasion with his inspiring presence.\nMr. Sugun Paul Coelho hoisted the National Flag to a resounding rendition of the National Anthem. The NCC Unit performed an impressive march-past that drew applause from the gathering. Cultural programs included patriotic songs, dance performances, and a skit emphasizing the values of freedom, unity, and national pride.\nStudents and faculty were reminded of the sacrifices made by our freedom fighters and the responsibility of each citizen to uphold the democratic values of the nation. The celebration concluded with distribution of sweets and a renewed pledge to serve the nation.`
  },
  {
    slug: 'kabaddi-tournament-2025',
    title: 'District Level Kabbaddi (Girls) Tournament 2025',
    content: `St. Anthony's PU College organized a district Kabaddi tournament (Girls) on 12th September 2025 on the college grounds. More than 40 teams from various colleges across the district participated in this competitive tournament. The event was inaugurated by Dr. Sundar Raj Arasu, HOD of Physical Education, Bangalore North.\nThe tournament provided a platform for young female athletes to showcase their talent, strength, and competitive spirit at the district level. The matches were marked by high-intensity play, skillful raids and tackles, and great teamwork. The event was a resounding success in promoting girls' participation in sports and reinforcing the college's commitment to gender equality in athletics.`
  },
  {
    slug: 'apl-season3',
    title: 'Anthonian Premier League (APL) – Season 3',
    content: `St. Anthony's PU College organized APL Season 3 to encourage young talent and promote the spirit of cricket among students. Six teams from different classes were formed during the APL auction by team captains, icon players, and team owners. The opening ceremony was held on 30th October 2025.\nThe tournament format closely mirrored the IPL with team names, colorful jerseys, cheerleaders, and live commentary, creating an electric atmosphere on the cricket ground. The tournament was played over several weeks with league matches leading to exciting semifinals and a grand final. The winning team was felicitated at the PU Day Celebration 2026 with the APL Trophy and certificates.`
  },
  {
    slug: 'annual-sports-meet-2025',
    title: 'Annual Sports and Athletics Meet 2025',
    content: `Anthonian Annual Athletic Meet was conducted on 6th and 7th November 2025. Team events including Kabaddi, Volleyball, Kho-Kho, and Throwball were held on the 6th, and the official Sporthathon and Athletic Meet was inaugurated on 7th November 2025.\nChief Guest: Mr. Vinay Kumar T S, Sports Co-ordinator, Vidya Nikethan School. The inaugural ceremony was marked by the lighting of the torch and parade of student athletes. Students competed in track and field events including sprints, relay races, long jump, high jump, and shot put.\nThe meet was a celebration of fitness, determination, and the competitive spirit of the Anthonians. Winners were felicitated with trophies, medals, and certificates. The event successfully promoted a healthy lifestyle and the importance of physical fitness among the student community.`
  },
  {
    slug: 'directors-birthday-2025',
    title: 'Director\'s Birthday Celebration 2025',
    content: `The birthday of Rev. Dr. Fr. Charles Furtado, Director of St. Anthony's Institutions, was celebrated with great joy and warmth on 4th November 2025. The celebration began with a short prayer service and was attended by management, faculty, and staff from both the PU and Degree sections of St. Anthony's Institutions.\nStudents and teachers came together to express their love and gratitude for the Director whose visionary leadership has guided the institution to new heights of excellence. The celebration included cultural performances, a cake cutting ceremony, and heartfelt messages from students and staff. Rev. Dr. Fr. Charles Furtado addressed the gathering, expressing his appreciation for the warm birthday wishes and reaffirming his commitment to the growth and development of the institution.`
  },
  {
    slug: 'seminar-ai-2025',
    title: 'Seminar on Artificial Intelligence & Robotics at Christ University',
    content: `St. Anthony's PU College organized a seminar for science students at Christ University from 17th–19th November 2025. The three-day program was hosted by the Artificial Intelligence and Mechanical Engineering departments of Christ University.\nStudents had the unique opportunity to explore the state-of-the-art Robotics Lab, Foundry Lab, and the Engine and Truck Parts Assembly Lab. Expert faculty from Christ University conducted sessions on Artificial Intelligence, Machine Learning, Robotics, and emerging technologies, providing students with insights into the rapidly evolving tech landscape.\nThe seminar inspired many students to explore careers in STEM fields and reinforced the importance of staying updated with technological advancements. Students returned with a broader perspective on higher education opportunities in engineering and technology.`
  },
  {
    slug: 'beats-bites-2025',
    title: 'Beats & Bites – Campus Celebration 2025',
    content: `St. Anthony's PU College hosted its much-anticipated campus celebration, Beats and Bites, on 14th November 2025. The celebration began with a formal inauguration ceremony followed by a special felicitation and farewell programme.\nThe college grounds came alive with the sounds of music and laughter as students and faculty came together to celebrate the spirit of unity and creativity. Students performed energetic dances, sang melodious songs, and showcased their talents in various cultural programs. Food stalls managed by students offered a variety of delicious cuisines, adding a gastronomic dimension to the celebration.\nThe event reinforced the college's commitment to providing students with a platform to express their creativity and talents beyond the classroom.`
  },
  {
    slug: 'spectrum-2k25',
    title: 'SPECTRUM 2K25 – A Fest of Flavor and Rhythm',
    content: `St. Anthony's PU College proudly organized the Inter-School Dance Competition, Spectrum 2025, on 13th November 2025. The event witnessed enthusiastic participation from numerous schools, making it a grand platform for young talents to celebrate the art of dance.\nParticipants were judged on choreography, synchronization, expression, costumes, and overall stage presence. The competition featured a variety of dance forms including classical, folk, western, and fusion styles, showcasing the diverse talents of the participating students.\nThe judges appreciated the high standard of performances and the dedication of the young dancers. The winners were felicitated with trophies and certificates. The event reinforced St. Anthony's PU College's reputation as a hub for cultural excellence and its commitment to nurturing the arts alongside academics.`
  },
  {
    slug: 'christmas-2025',
    title: 'Christmas Celebration 2025',
    content: `Christmas inspires the spirit of sharing and caring. We the Anthonians gathered together on 23rd December 2025. Rev. Fr. Sandeep D'Souza addressed the students spreading the message of love and joy.\nThough we hail from different religious traditions, we will not allow ourselves to be blinded by hatred or violence. The celebration featured carol singing, a beautifully staged nativity play, and cultural performances that captured the true spirit of Christmas. Students from all faiths came together in the spirit of brotherhood and harmony to celebrate this joyous occasion.\nThe event reinforced the inclusive culture of St. Anthony's PU College where students of all backgrounds are respected and celebrated. The celebration concluded with the distribution of sweets and Christmas gifts, spreading joy throughout the campus.`
  },
  {
    slug: 'excursion-2025',
    title: 'Excursion organized by St. Anthony\'s P.U. College',
    content: `Excursion organized by St. Anthony's P.U. College. The college phase is one of the most interesting stages in life with plenty of opportunities to explore, grow and deep dive into the ocean of new beginnings and possibilities. Academics, cultural activities, annual day, sports day, P.U. day and not to forget the most awaited college trip.
Foreigners often remark India as a land of temples, shrines of diversity and culture. What could be better than giving the opportunity to our students to explore the sacred places, nature, and beaches. A round trip to Dhandeli, Gokarna, Murdeshwara and Udupi began at the dusk of 26th November 2025 with 176 students, 11 staff members accompanied by the principal Rev. Fr. Roshan Rosario.
Kayaking, Boating, swimming, Zorbing, Rain Dance were the various activities that the students indulged in Dhandeli. Of course, the best way to bring an end to an adventurous day, is by dancing around the camp fire and to cool off the humidity of the place, it is not even difficult to guess that the rain dance made up to cool the mind, body and soul.
The enchanting temples of Gokarna, Murdeshwara and the breath-taking views of the beaches that surround them was an enticing experience. Malpe was the last destination but wasn't the least of the expectations. A sense of relief that the students had a best time they deserved and most importantly, without compromising the safety of our students we concluded the marathon. All good things come to an end, so did our three-day action-packed vacation. With a promise to extend this thrilling experience to our future batch of students, St. Anthony's Institutions called a halt to outdoor amusements for the year.`
  },
  {
    slug: 'anthonian-pu-day-2026',
    title: 'Anthonian PU Day Celebration 2026',
    content: `The PU Day Celebration at St. Anthony's PU College was held on 31st January 2026 at the college campus with great enthusiasm, joy, and a touch of nostalgia. The event brought together management, faculty, students, and distinguished guests to celebrate the outgoing batch and honor their achievements.
The programme commenced with a graceful Prayer Dance, followed by the Academic Report presented by Rev. Fr. Clement Paul D'Souza, who highlighted the institution's accomplishments during the academic year. Winners of the vibrant Beats & Bites Dance Competition were honored for their creativity and energetic performances. Students who achieved 100% attendance were also recognized, applauded for their consistency, discipline, and commitment.
A special moment of the evening was the introduction of the Guest of Honour, Dr. Lerroy Calvin Noronha, a proud alumnus of SAPUC. Further adding to the celebratory spirit was the distribution of prizes to the Winners and Runners-up of the Anthonian Premier League, along with students who had excelled at the State and District Level in various sports.
The programme then featured the introduction of the Chief Guest, Sri Thimmaiah whose gracious presence elevated the significance of the occasion. One of the highlights of the evening was the series of dance performances by all the PUC sections. The event concluded on a symbolic and solemn note with the Lighting of the Lamp, followed by the College Pledge and a Prayer of Blessing.`
  },
]

async function updateContent() {
  const conn = await pool.getConnection()
  try {
    let updated = 0
    let notFound = []

    for (const item of fullContent) {
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
