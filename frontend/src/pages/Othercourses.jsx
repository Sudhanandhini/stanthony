// src/pages/courses/OtherCourses.jsx

import { Link } from 'react-router-dom'
import ban33 from '../assets/oth-1.png'
import imgNeet from '../assets/NEET.png'
import imgCpt from '../assets/CPT.png'
import imgTally from '../assets/TALLY.png'
import imgSap from '../assets/SAP-1.png'

const courses = [
  {
    id: 'jee-neet',
    label: 'JEE/NEET',
    imgSide: 'left',
    imgBg: '#1a2a4a',
    imgContent: <img src={imgNeet} alt="JEE/NEET" className="w-full h-full object-cover" />,
    title: 'JEE/NEET',
    content: (
      <>
        <ul className="list-disc list-inside space-y-2 text-[12.5px] text-gray-700 leading-6 mb-3">
          <li>
            <strong>Joint Entrance Examination – Main (JEE-Main)</strong>, formerly <strong>All India Engineering Entrance Examination (AIEEE)</strong>, is an examination organised by the Central Board of Secondary Education (CBSE) in India. Introduced in the year 2002, this national level competitive test is for admissions to various undergraduate engineering and architecture courses in institutes accepting the AIEEE score, mainly 31 National Institutes of Technology (NITs) and 23 Indian Institute of Information Technology (IITs). The examination, originally called sometimes AIEEE, was renamed as Joint Entrance Examination (Main) in April 2017. Candidates are ranked on an all-India basis and on state basis. Thus, they get an All India Rank (AIR) and a State Rank (SR).
          </li>
          <li>
            The <strong>National Eligibility cum Entrance Test/ NEET-UG</strong> is an entrance examination in India, for students who wish to study any graduate medical course (MBBS), dental course (BDS) or postgraduate course (MD / MS) in government or private medical colleges in India. NEET-UG (Undergraduate), for MBBS and BDS courses, are conducted by the Central Board of Secondary Education (CBSE). NEET-UG replaced the All India Pre Medical Test (AIPMT) and all individual MBBS exams conducted by states or colleges themselves in 2013.
          </li>
        </ul>
        <p className="text-[12.5px] text-gray-600 leading-6">
          Special Coaching for JEE and NEET is provided along with the regular Karnataka State Board PU Syllabus. This coaching is available for Science Stream Students who either want to build their career in Engineering or Medicine respectively.
        </p>
      </>
    ),
  },
  {
    id: 'ca-cpt',
    label: 'CA/CPT',
    imgSide: 'right',
    imgContent: <img src={imgCpt} alt="CA/CPT" className="w-full h-full object-cover" />,
    title: 'CA/CPT',
    content: (
      <>
        <p className="text-[12.5px] text-gray-700 leading-6 mb-3">
          This is the entrance examination of Chartered Accountancy Course. CA CPT tests a student in four areas viz. Accounting,
          Mercantile Laws, General Economics and Quantitative Aptitude. CPT is an objective type test with negative marking for each
          wrong option. After passing class 10th, a student is eligible for registration for Common Proficiency Test. But a student can appear
          for CA-CPT only if he has appeared in the Senior Secondary Examination (10+2 Examination).
        </p>
        <p className="text-[12.5px] text-gray-700 leading-6">
          CA/CPT Integrated coaching is made available for the interested Students pursuing Commerce in addition to regular Karnataka
          State Board PU Syllabus.
        </p>
      </>
    ),
  },
  {
    id: 'tally',
    label: 'TALLY',
    imgSide: 'left',
    imgContent: <img src={imgTally} alt="TALLY" className="w-full h-full object-cover" />,
    title: 'TALLY',
    content: (
      <p className="text-[12.5px] text-gray-700 leading-6">
        Tally is one of the most popular Accounting Software used in India. Knowledge of Tally is one of the basic requirement for many accounts jobs.
        Tally is not just an accounting software. After the release of ERP version of Tally, the capability and functioning of Tally is much more widened and extended to a great extent.
      </p>
    ),
  },
  {
    id: 'sap',
    label: 'SAP',
    imgSide: 'right',
    imgContent: <img src={imgSap} alt="SAP" className="w-full h-full object-cover" />,
    title: 'SAP',
    content: (
      <p className="text-[12.5px] text-gray-700 leading-6">
        SAP ERP consists of several modules, including Financial Accounting (FI), Controlling (CO), Asset Accounting (AA), Sales &
        Distribution (SD), Material Management (MM), Product Planning (PP), Quality Management (QM), Project System (PS), Plant
        Maintenance (PM), Human Resources (HR). SAP ERP collects and combines data from the separate modules to provide the
        company or organization with enterprise resource planning. The latest version, SAP ERP 6.0, was released in 2006. SAP ERP 6.0
        has since then been updated through SAP enhancement packs, the most recent: SAP enhancement package 8 for SAP ERP 6.0
        in 2016.
      </p>
    ),
  },
]


function CourseRow({ course }) {
  const isLeft = course.imgSide === 'left'

  const ImageBox = (
    <div
      className="w-full sm:w-44 flex-shrink-0 overflow-hidden rounded-sm"
      style={{ minHeight: 160, background: '#eee' }}
    >
      {course.imgContent}
    </div>
  )

  const ContentBox = (
    <div className="flex-1">
      <h3 className="font-bold text-[14px] text-gray-800 mb-3">{course.title}</h3>
      {course.content}
    </div>
  )

  return (
    <div id={course.id} className="py-8 border-b border-gray-100 last:border-0">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {isLeft ? (
          <>{ImageBox}{ContentBox}</>
        ) : (
          <>{ContentBox}{ImageBox}</>
        )}
      </div>
    </div>
  )
}

export default function OtherCourses() {
  return (
    <div>

      {/* ── Banner image ── */}
      <div className="w-full overflow-hidden">
        <img src={ban33} alt="Other Courses" className="w-full object-cover" style={{ display: 'block' }} />
      </div>

      {/* ── Blue italic title bar ── */}
     

      {/* ── Course sections ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 max-w-4xl">
          {courses.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </div>
      </section>

    </div>
  )
}