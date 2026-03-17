// src/pages/Admission.jsx  — Frontend only, no backend required

import { useState } from 'react'
import demo from "../assets/ADMI.png"
import pdfBrochure    from "../assets/pdf/16th-year-Brochure-2025-1.pdf"
import pdfProspectus  from "../assets/pdf/ST.-Anthonys-Prospectus-2026-compressed.pdf"
import pdfForm1       from "../assets/pdf/PUC-APPLICATION-FORM-ONE-2025-26.pdf"
import pdfForm2       from "../assets/pdf/Microsoft Word - ADMGUIDELINES 2014-15.docx.pdf"

const STREAM_OPTIONS = [
  'PCMB – Physics, Chemistry, Mathematics, Biology',
  'PCMCs – Physics, Chemistry, Mathematics, Computer Science',
  'PCME – Physics, Chemistry, Mathematics, Electronics',
  'CEBA – Computer Science, Economics, Business Studies, Accountancy',
  'SEBA – Statistics, Economics, Business Studies, Accountancy',
  'HEBA – History, Economics, Business Studies, Accountancy',
  'MEBA – Basic Maths, Economics, Business Studies, Accountancy',
  'HEGS – History, Economics, Geography, Sociology',
]

const BOARD_OPTIONS = [
  'Karnataka SSLC Board',
  'CBSE',
  'ICSE',
  'State Board (Other)',
  'Others',
]

const inp =
  'w-full border border-gray-300 rounded px-3 py-[7px] text-[13px] text-gray-700 focus:outline-none focus:border-[#0288d1] focus:ring-1 focus:ring-[#0288d1] bg-white placeholder-gray-400'

function Label({ text, required }) {
  return (
    <label className="block text-[12px] font-medium text-gray-700 mb-[3px]">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  )
}

function Row({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
}

function Section({ title }) {
  return (
    <div className="flex items-center gap-0 mt-6 mb-4">
      <div className="w-1 h-5 rounded-sm mr-2" style={{ background: '#0288d1' }} />
      <span className="text-[13px] font-semibold" style={{ color: '#0288d1' }}>{title}</span>
    </div>
  )
}

export default function Admission() {
  const [form, setForm] = useState({
    studentName: '', fatherName: '', fatherContact: '',
    motherName: '', motherContact: '', address: '',
    nationality: '', caste: '', motherTongue: '', religion: '',
    aadharNo: '', email: '',
    satsNo: '', schoolName: '', boardName: '',
    regNo: '', examYear: '', examMonth: '', medium: '',
    lang1: '', lang2: '', lang3: '',
    science: '', maths: '', socialScience: '', totalMarks: '',
    achievements: '',
    secondLang: [],
    stream: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: '' }))
  }

  const toggleLang = (lang) => {
    setForm((p) => ({
      ...p,
      secondLang: p.secondLang.includes(lang)
        ? p.secondLang.filter((l) => l !== lang)
        : [...p.secondLang, lang],
    }))
  }

  const validate = () => {
    const e = {}
    if (!form.studentName.trim()) e.studentName = 'Required'
    if (!form.fatherName.trim())  e.fatherName  = 'Required'
    if (!form.fatherContact.trim()) e.fatherContact = 'Required'
    if (!form.motherName.trim())  e.motherName  = 'Required'
    if (!form.motherContact.trim()) e.motherContact = 'Required'
    if (!form.address.trim())     e.address     = 'Required'
    if (!form.nationality.trim()) e.nationality = 'Required'
    if (!form.caste.trim())       e.caste       = 'Required'
    if (!form.motherTongue.trim()) e.motherTongue = 'Required'
    if (!form.religion.trim())    e.religion    = 'Required'
    if (!form.aadharNo.trim() || form.aadharNo.length < 12) e.aadharNo = 'Enter valid 12-digit Aadhar'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter valid email'
    if (!form.schoolName.trim()) e.schoolName = 'Required'
    if (!form.boardName)         e.boardName  = 'Required'
    if (!form.regNo.trim())      e.regNo      = 'Required'
    if (!form.examYear.trim())   e.examYear   = 'Required'
    if (!form.examMonth.trim())  e.examMonth  = 'Required'
    if (!form.medium.trim())     e.medium     = 'Required'
    if (!form.lang1)             e.lang1      = 'Required'
    if (!form.lang2)             e.lang2      = 'Required'
    if (!form.lang3)             e.lang3      = 'Required'
    if (!form.science)           e.science    = 'Required'
    if (!form.maths)             e.maths      = 'Required'
    if (!form.socialScience)     e.socialScience = 'Required'
    if (!form.totalMarks)        e.totalMarks = 'Required'
    if (!form.stream)            e.stream     = 'Required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      const first = document.querySelector('[data-err]')
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const Err = ({ k }) =>
    errors[k] ? (
      <p className="text-red-500 text-[10px] mt-0.5">{errors[k]}</p>
    ) : null

  const field = (key, label, required, type = 'text', extra = {}) => (
    <div data-err={errors[key] ? true : undefined}>
      <Label text={label} required={required} />
      <input
        className={`${inp} ${errors[key] ? 'border-red-400' : ''}`}
        type={type}
        value={form[key]}
        onChange={set(key)}
        {...extra}
      />
      <Err k={key} />
    </div>
  )

  if (submitted) {
    return (
      <div>
        {/* Hero */}
        <div className="relative flex items-end overflow-hidden" style={{ height: 160, background: 'linear-gradient(135deg,#1a3974,#0288d1)' }}>
          <div className="absolute right-8 top-4 text-8xl opacity-50 select-none">📚</div>
          <h1 className="relative z-10 px-10 pb-6 text-3xl font-bold text-white italic" style={{ fontFamily: 'Georgia,serif' }}>Admission</h1>
        </div>
        <div className="w-full text-white text-center font-bold text-lg tracking-widest py-2.5" style={{ background: '#1565c0' }}>ADMISSION</div>

        <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
          <div className="text-6xl mb-5">✅</div>
          <h2 className="text-xl font-bold mb-2" style={{ color: '#1a3974' }}>Application Submitted Successfully!</h2>
          <p className="text-gray-500 text-sm mb-1">Thank you, <strong>{form.studentName}</strong>.</p>
          <p className="text-gray-400 text-sm mb-8">We will contact you shortly for further process.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 max-w-sm w-full text-xs text-gray-600 space-y-1 mb-8">
            <p><span className="font-semibold text-gray-800">Stream Applied:</span> {form.stream}</p>
            <p><span className="font-semibold text-gray-800">Father Contact:</span> {form.fatherContact}</p>
            <p><span className="font-semibold text-gray-800">Email:</span> {form.email}</p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ studentName:'',fatherName:'',fatherContact:'',motherName:'',motherContact:'',address:'',nationality:'',caste:'',motherTongue:'',religion:'',aadharNo:'',email:'',satsNo:'',schoolName:'',boardName:'',regNo:'',examYear:'',examMonth:'',medium:'',lang1:'',lang2:'',lang3:'',science:'',maths:'',socialScience:'',totalMarks:'',achievements:'',secondLang:[],stream:'' }); setErrors({}) }}
            className="px-8 py-2.5 rounded text-white text-sm font-semibold"
            style={{ background: '#0288d1' }}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative flex items-end overflow-hidden" style={{ height: 300 }}>
        <img src={demo}  />

        <h1 className="relative z-10 px-10 pb-6 text-3xl font-bold text-white italic" style={{ fontFamily: 'Georgia,serif' }}>Admission</h1>
      </div>
  

      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 max-w-2xl">

          <h2 className="font-bold text-sm text-gray-800 mb-5">
            ADMISSION 1<sup>ST</sup> PU / 2<sup>ND</sup> PU
          </h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="border border-gray-200 rounded px-5 py-4 sm:px-7 sm:py-5 mb-5">

              {/* ── 1. Personal Information ── */}
              <Section title="Personal Information" />

              <div className="space-y-3">
                {field('studentName', 'Name of the Student', true, 'text', { placeholder: 'Enter your full name' })}
                {field('fatherName', 'Name of the Father', true, 'text', { placeholder: 'Enter father name' })}
                {field('fatherContact', 'Contact Number (Father)', true, 'tel', { placeholder: 'Enter father number' })}
                {field('motherName', 'Name of the Mother', true, 'text', { placeholder: 'Enter mother name' })}
                {field('motherContact', 'Contact Number (Mother)', true, 'tel', { placeholder: 'Enter mother number' })}

                <div data-err={errors.address ? true : undefined}>
                  <Label text="Address" required />
                  <textarea
                    className={`${inp} resize-none ${errors.address ? 'border-red-400' : ''}`}
                    rows={3}
                    value={form.address}
                    onChange={set('address')}
                    placeholder="Enter full address"
                  />
                  <Err k="address" />
                </div>

                <Row>
                  <div data-err={errors.nationality ? true : undefined}>
                    <Label text="Nationality" required />
                    <input className={`${inp} ${errors.nationality ? 'border-red-400':''}`} value={form.nationality} onChange={set('nationality')} placeholder="Enter your nationality" />
                    <Err k="nationality" />
                  </div>
                  <div data-err={errors.caste ? true : undefined}>
                    <Label text="Caste" required />
                    <input className={`${inp} ${errors.caste ? 'border-red-400':''}`} value={form.caste} onChange={set('caste')} placeholder="Enter your caste" />
                    <Err k="caste" />
                  </div>
                </Row>

                <Row>
                  <div data-err={errors.motherTongue ? true : undefined}>
                    <Label text="Mother Tongue" required />
                    <input className={`${inp} ${errors.motherTongue ? 'border-red-400':''}`} value={form.motherTongue} onChange={set('motherTongue')} placeholder="Enter your mother tongue" />
                    <Err k="motherTongue" />
                  </div>
                  <div data-err={errors.religion ? true : undefined}>
                    <Label text="Religion" required />
                    <input className={`${inp} ${errors.religion ? 'border-red-400':''}`} value={form.religion} onChange={set('religion')} placeholder="Enter your religion" />
                    <Err k="religion" />
                  </div>
                </Row>

                <div data-err={errors.aadharNo ? true : undefined}>
                  <Label text="Aadhar No" required />
                  <input className={`${inp} ${errors.aadharNo ? 'border-red-400':''}`} value={form.aadharNo} onChange={set('aadharNo')} placeholder="Your 12 digit Aadhar number" maxLength={12} type="text" inputMode="numeric" />
                  <Err k="aadharNo" />
                </div>

                <div data-err={errors.email ? true : undefined}>
                  <Label text="Email Id" required />
                  <input className={`${inp} ${errors.email ? 'border-red-400':''}`} type="email" value={form.email} onChange={set('email')} placeholder="Enter Your Email Id" />
                  <Err k="email" />
                </div>
              </div>

              {/* ── 2. Educational Background ── */}
              <Section title="Educational Background" />
              <div className="space-y-3">
                <div>
                  <Label text="SA% No" />
                  <input className={inp} value={form.satsNo} onChange={set('satsNo')} placeholder="Enter SATS number" />
                </div>
                <div data-err={errors.schoolName ? true : undefined}>
                  <Label text="Name or the School Student" required />
                  <input className={`${inp} ${errors.schoolName ? 'border-red-400':''}`} value={form.schoolName} onChange={set('schoolName')} placeholder="Enter school name" />
                  <Err k="schoolName" />
                </div>
                <div data-err={errors.boardName ? true : undefined}>
                  <Label text="Name of the Board Student" required />
                  <select className={`${inp} ${errors.boardName ? 'border-red-400':''}`} value={form.boardName} onChange={set('boardName')}>
                    <option value="">-- Please choose an option --</option>
                    {BOARD_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <Err k="boardName" />
                </div>
              </div>

              {/* ── 3. SSLC Preparatory Examination Details ── */}
              <Section title="SSLC Preparatory Examination Details" />
              <div className="space-y-3">
                {[
                  ['regNo','Reg No','Enter registration number'],
                  ['examYear','Year of Examination','Year'],
                  ['examMonth','Month of Examination','Enter month (e.g. March)'],
                  ['medium','Medium of Instruction','Enter medium of instruction'],
                ].map(([key, label, ph]) => (
                  <div key={key} data-err={errors[key] ? true : undefined}>
                    <Label text={label} required />
                    <input className={`${inp} ${errors[key] ? 'border-red-400':''}`} value={form[key]} onChange={set(key)} placeholder={ph} />
                    <Err k={key} />
                  </div>
                ))}
              </div>

              {/* ── 4. Subjects Marks Obtained ── */}
              <Section title="Subjects Marks Obtained (Out of 80)" />
              <div className="space-y-3">
                {[
                  ['lang1','I Language'],
                  ['lang2','II Language'],
                  ['lang3','III Language'],
                  ['science','Science'],
                  ['maths','Mathematics'],
                  ['socialScience','Social Science'],
                ].map(([key, label]) => (
                  <div key={key} data-err={errors[key] ? true : undefined}>
                    <Label text={label} required />
                    <input
                      className={`${inp} ${errors[key] ? 'border-red-400':''}`}
                      type="number" min={0} max={80}
                      value={form[key]} onChange={set(key)}
                      placeholder="Enter marks (0–80)"
                    />
                    <Err k={key} />
                  </div>
                ))}
                <div data-err={errors.totalMarks ? true : undefined}>
                  <Label text="Total Marks Obtained" required />
                  <input
                    className={`${inp} ${errors.totalMarks ? 'border-red-400':''}`}
                    type="number" min={0} max={480}
                    value={form.totalMarks} onChange={set('totalMarks')}
                    placeholder="Enter total marks (out of 480)"
                  />
                  <Err k="totalMarks" />
                </div>
              </div>

              {/* ── 5. Additional Information ── */}
              <Section title="Additional Information" />
              <div>
                <Label text="Sports/Other Achievements" />
                <textarea
                  className={`${inp} resize-none`}
                  rows={4}
                  value={form.achievements}
                  onChange={set('achievements')}
                  placeholder="Mention any sports/other achievements"
                />
              </div>

              {/* ── 6. Course Preferences ── */}
              <Section title="Course Preferences" />
              <div className="space-y-4">
                {/* First Language */}
                <div>
                  <p className="text-[12px] font-medium text-gray-700 mb-1.5">First Languages</p>
                  <label className="flex items-center gap-2 text-[12px] text-gray-600 cursor-pointer">
                    <input type="checkbox" checked readOnly className="accent-[#0288d1]" />
                    English
                  </label>
                </div>

                {/* Second Language */}
                <div>
                  <p className="text-[12px] font-medium text-gray-700 mb-1.5">Second Languages</p>
                  <div className="flex gap-6">
                    {['Kannada', 'Hindi'].map((lang) => (
                      <label key={lang} className="flex items-center gap-2 text-[12px] text-gray-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.secondLang.includes(lang)}
                          onChange={() => toggleLang(lang)}
                          className="accent-[#0288d1]"
                        />
                        {lang}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Stream */}
                <div data-err={errors.stream ? true : undefined}>
                  <Label text="Name of the Stream to Apply For" required />
                  <select
                    className={`${inp} ${errors.stream ? 'border-red-400':''}`}
                    value={form.stream}
                    onChange={set('stream')}
                  >
                    <option value="">---- Please choose an option ----</option>
                    {STREAM_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <Err k="stream" />
                </div>
              </div>

            </div>{/* end card */}

            {/* ── Important Information ── */}
            <div className="mb-5">
              <p className="font-bold text-[13px] text-gray-800 mb-2">Important Information</p>
              <p className="text-[12px] text-gray-600 mb-2">
                The following documents should be brought on the day of interaction:
              </p>
              <ul className="space-y-1 mb-3">
                {[
                  'Photocopy of 10th Std Preparatory Exam',
                  'Photocopy of Aadhar card of student',
                  '3 Passport size photographs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-[12px] text-gray-600">
                    <span className="mt-0.5" style={{ color: '#0288d1' }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-gray-600 mb-1">
                Names entered in the registration form should be as per Birth Certificate / Aadhar Card / Passport submitted
              </p>
              <p className="text-[12px] text-red-600 font-medium">
                Incomplete forms will be rejected.
              </p>
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              className="w-full text-white font-bold text-sm py-3 rounded transition-opacity hover:opacity-90"
              style={{ background: '#0288d1' }}
            >
              Submit Application
            </button>
          </form>

          {/* ── Download Links ── */}
          <div className="mt-8">
            <p className="font-bold text-[13px] text-gray-700 mb-3 uppercase tracking-wide">
              Download Application Form
            </p>
            <div className="space-y-2">
              {[
                ['PUC BROCHURE',          pdfBrochure],
                ['PUC PROSPECTUS',         pdfProspectus],
                ['PUC APPLICATION FORM 1', pdfForm1],
                ['PUC APPLICATION FORM 2', pdfForm2],
              ].map(([label, href]) => (
                <div key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-semibold hover:underline"
                    style={{ color: '#0288d1' }}
                  >
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}