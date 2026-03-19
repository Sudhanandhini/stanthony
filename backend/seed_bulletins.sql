-- Creates and seeds the bulletins table from WordPress wp_posts data

CREATE TABLE IF NOT EXISTS `bulletins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `post_title` VARCHAR(500) NOT NULL,
  `pdf_url` VARCHAR(1000) NOT NULL,
  `post_date` DATETIME NOT NULL,
  `academic_year` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `bulletins`;

INSERT INTO `bulletins` (`post_title`, `pdf_url`, `post_date`, `academic_year`) VALUES

-- Academic Year 2025-2026
('Anthonian Bulletin 18 - PU Day Celebration', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/03/Anthonian-Bulletin-18-PU-Day-Celebration.pdf', '2026-03-05', 2025),
('Anthonian Bulletin 17', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/Anthonian-Bulletin-17.pdf', '2026-01-07', 2025),
('Anthonian Bulletin 16', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/Anthonian-Bulletin-16.pdf', '2026-01-07', 2025),
('Anthonian Bulletin 15B - Beats and Bites', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/Anthonian-Bulletin-15B-Beats-and-Bites.pdf', '2026-01-07', 2025),
('Anthonian Bulletin 15 A - Spectrum 2k25', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/Anthonian-Bulletin-15-A-Spectrum-2k25.pdf', '2026-01-07', 2025),
('Anthonian Bulletin 14 - Seminar on Robotics', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2026/01/Anthonian-Bulletin-14-Seminar-on-Robotics.pdf', '2026-01-07', 2025),
('Anthonian Bulletin 13', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/12/Anthonian-Bulletin-13.pdf', '2025-12-05', 2025),
('Anthonian Bulletin 12', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/12/Anthonian-Bulletin-12.pdf', '2025-12-05', 2025),
('Anthonian Bulletin 11', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/12/Anthonian-Bulletin-11.pdf', '2025-12-04', 2025),
('Anthonian Bulletin 10 - Anthonian Premier League 3', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/12/Anthonian-Bulletin-10-Anthonian-Premier-League-3.pdf', '2025-12-04', 2025),
('Anthonian Bulletin 09 - District Level Kabbaddi (Girls) Tornament', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/11/Anthonian-Bulletin-09-District-Level-Kabbaddi-Girls-Tornament.pdf', '2025-11-12', 2025),
('Anthonian Bulletin 08 - Independence day celebration', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/08/Anthonian-Bulletin-08-Independence-day-celebration.pdf', '2025-08-26', 2025),
('Anthonian Bulletin 07', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/08/Anthonian-Bulletin-07.pdf', '2025-08-01', 2025),
('Anthonian Bulletin 06', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/08/Anthonian-Bulletin-06.pdf', '2025-08-01', 2025),
('Anthonian Bulletin 05 - Felicitation of Academic Achievers', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/07/Anthonian-Bulletin-05-Felicitation-of-Academic-Achievers.pdf', '2025-07-11', 2025),
('Anthonian Bulletin 04 - International Yoga Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/07/Anthonian-Bulletin-04-International-Yoga-Day.pdf', '2025-07-08', 2025),
('Anthonian Bulletin 03 - Parent Orientation Programme', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/07/Anthonian-Bulletin-03-Parent-Orientation-Programme.pdf', '2025-07-08', 2025),
('Anthonian Bulletin 02', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/Anthonian-Bulletin-02.pdf', '2025-06-18', 2025),
('Anthonian Bulletin 01 - Inauguration of Academic Year (1)', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/06/Anthonian-Bulletin-01-Inauguration-of-Academic-Year-1.pdf', '2025-06-18', 2025),

-- Academic Year 2024-2025
('Anthonian Bulletin 19 - PU Day Celebration', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/02/Anthonian-Bulletin-19-PU-Day-Celebration.pdf', '2025-02-20', 2024),
('Anthonian Bulletin 18 - Christmas Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/02/Anthonian-Bulletin-18-Christmas-Day.pdf', '2025-02-20', 2024),
('Anthonian Bulletin 17 - Academic Excursion', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2025/01/Anthonian-Bulletin-17-Academic-Excursion.pdf', '2025-01-11', 2024),
('Anthonian Bulletin 16 - Kannada Rajyotsava Celebration', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/12/Anthonian-Bulletin-16-Kannada-Rajyotsava-Celebration.pdf', '2024-12-18', 2024),
('Anthonian Bulletin 15 - Beats and Bites', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/12/Anthonian-Bulletin-15-Beats-and-Bites.pdf', '2024-12-18', 2024),
('Anthonian Bulletin 14 - Anthonian Athletic Meet', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/12/Anthonian-Bulletin-14-Anthonian-Athletic-Meet.pdf', '2024-12-03', 2024),
('Anthonian Bulletin 13 - Anthonian Premier League 2', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/11/Anthonian-Bulletin-13-Anthonian-Premier-League-2.pdf', '2024-11-19', 2024),
('Anthonian Bulletin 12 - Swach Bharat & International Day of democracy', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/11/Anthonian-Bulletin-12-Swach-Bharat-International-Day-of-democracy-1.pdf', '2024-11-11', 2024),
('Anthonian Bulletin 11 - Seminar on CA foundation, Campus to corporate, FDP', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/11/Anthonian-Bulletin-11-Seminar-on-CA-foundation-Campus-to-corporate-FDP-1.pdf', '2024-11-11', 2024),
('Anthonian Bulletin 10 - District Level Ball Badminton Netball Tournament', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/09/Anthonian-Bulletin-10-District-Level-Ball-Badminton-Netball-Tornament.pdf', '2024-09-23', 2024),
('Anthonian Bulletin 09 - Independence day celebration', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/08/Anthonian-Bulletin-09-Independence-day-celebration.pdf', '2024-08-28', 2024),
('Anthonian Bulletin 08 - Workshop on NEET, K-CET and Competitive exams', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/08/Anthonian-Bulletin-08-Workshop-on-NEET-K-CET-and-Competitive-exams.pdf', '2024-08-07', 2024),
('Anthonian Bulletin 07 - Parent Orientation Programme', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/07/Anthonian-Bulletin-07-Parent-Orientation-Programme.pdf', '2024-07-11', 2024),
('Anthonian Bulletin 06 - Freshers Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/07/Anthonian-Bulletin-06-Freshers-Day.pdf', '2024-07-08', 2024),
('Anthonian Bulletin 05 - Investiture Ceremony', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/07/Anthonian-Bulletin-05-Investiture-Ceremony.pdf', '2024-07-08', 2024),
('Anthonian Bulletin 04 - Felicitation Programme', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/07/Anthonian-Bulletin-04-Felicitation-Programme.pdf', '2024-07-03', 2024),
('Anthonian Bulletin 03 - International Yoga Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/06/Anthonian-Bulletin-03-International-Yoga-Day.pdf', '2024-06-26', 2024),
('Anthonian Bulletin 02 - Student orientation programme', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/06/Anthonian-Bulletin-02-Student-orientation-programme.pdf', '2024-06-26', 2024),
('Anthonian Bulletin 01 - Inauguration of Academic Year', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/06/Anthonian-Bulletin-01-Inauguration-of-Academic-Year.pdf', '2024-06-26', 2024),

-- Academic Year 2023-2024
('Anthonian Bulletin 16 - Christmas Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/02/Anthonian-Bulletin-16-Christmas-Day.pdf', '2024-02-22', 2023),
('Anthonian Bulletin 15 - PU Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/02/Anthonian-Bulletin-15-PU-Day.pdf', '2024-02-07', 2023),
('Anthonian Bulletin 14 - Vigyan', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/01/Anthonian-Bulletin-14-Vigyan.pdf', '2024-01-22', 2023),
('Anthonian Bulletin 13 - Beats and Bites', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2024/01/Anthonian-Bulletin-13-Beats-and-Bites.pdf', '2024-01-16', 2023),
('Anthonian Bulletin 12 - Kannada Rajyothsava', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-12-Kannada-Rajyothsava.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 11 - Anthonian Athletic Meet', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-11-Anthonian-Athletic-Meet.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 10 - Academics', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-10-Academics.pdf', '2023-12-18', 2023),
('Anthonian Bulletin 09 - Constitution Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-09-Constitution-Day.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 08 - Teachers day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-08-Teachers-day.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 07 - Independence Day', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-07-Independence-Day.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 06', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-06-.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 05', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-05.pdf', '2023-12-18', 2023),
('Anthonian Bulletin 04', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-04.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 03', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-03.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 02', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-02.pdf', '2023-12-13', 2023),
('Anthonian Bulletin 01', 'https://www.stanthonyscollege.edu.in/wp-content/uploads/2023/12/Anthonian-Bulletin-01.pdf', '2023-12-13', 2023);
