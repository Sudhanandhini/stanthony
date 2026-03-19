import { useState } from 'react'

const STREAMS = ['PCMB', 'PCMC', 'HEGS', 'HEBA', 'SEBA', 'EBAC']

const streamSubjects = {
  hegs: [
    { label: 'History',   theory: 'history_theory',    ia: 'history_ia',    total: 'history_total' },
    { label: 'Economics', theory: 'economics_theory',  ia: 'economics_ia',  total: 'economics_total' },
    { label: 'Geography', theory: 'geography_theory',  ia: 'geography_ia',  total: 'geography_total' },
    { label: 'Sociology', theory: 'sociology_theory',  ia: 'sociology_ia',  total: 'sociology_total' },
  ],
  heba: [
    { label: 'History',          theory: 'history_theory',   ia: 'history_ia',   total: 'history_total' },
    { label: 'Economics',        theory: 'economics_theory', ia: 'economics_ia', total: 'economics_total' },
    { label: 'Business Studies', theory: 'business_theory',  ia: 'business_ia',  total: 'business_total' },
    { label: 'Accountancy',      theory: 'accounts_theory',  ia: 'accounts_ia',  total: 'accounts_total' },
  ],
  pcmb: [
    { label: 'Physics',     theory: 'physics_theory',    ia: 'physics_practical',   total: 'physics_total' },
    { label: 'Chemistry',   theory: 'chemistry_theory',  ia: 'chemistry_practical', total: 'chemistry_total' },
    { label: 'Mathematics', theory: 'maths_theory',      ia: 'maths_ia',            total: 'maths_total' },
    { label: 'Biology',     theory: 'biology_theory',    ia: 'biology_practical',   total: 'biology_total' },
  ],
  pcmc: [
    { label: 'Physics',          theory: 'physics_theory',   ia: 'physics_practical',   total: 'physics_total' },
    { label: 'Chemistry',        theory: 'chemistry_theory', ia: 'chemistry_practical', total: 'chemistry_total' },
    { label: 'Mathematics',      theory: 'maths_theory',     ia: 'maths_ia',            total: 'maths_total' },
    { label: 'Computer Science', theory: 'cs_theory',        ia: 'cs_practical',        total: 'cs_total' },
  ],
  seba: [
    { label: 'Economics',        theory: 'economics_theory',  ia: 'economics_ia',  total: 'economics_total' },
    { label: 'Business Studies', theory: 'business_theory',   ia: 'business_ia',   total: 'business_total' },
    { label: 'Accountancy',      theory: 'accounts_theory',   ia: 'accounts_ia',   total: 'accounts_total' },
    { label: 'Statistics',       theory: 'statistics_theory', ia: 'statistics_ia', total: 'statistics_total' },
  ],
  ebac: [
    { label: 'Economics',        theory: 'economics_theory', ia: 'economics_ia',       total: 'economics_total' },
    { label: 'Business Studies', theory: 'business_theory',  ia: 'business_ia',        total: 'business_total' },
    { label: 'Accountancy',      theory: 'accounts_theory',  ia: 'accounts_ia',        total: 'accounts_total' },
    { label: 'Computer Science', theory: 'computer_theory',  ia: 'computer_practical', total: 'computer_total' },
  ],
}

function val(data, col) {
  return col && data[col] != null && data[col] !== '' ? data[col] : '—'
}

function ResultCard({ data, stream }) {
  const subjects = streamSubjects[stream] || []
  const passed = (data.result || '').toLowerCase().includes('pass')

  return (
    <div className="mt-6 text-left">
      {/* Student info banner */}
      <div className="bg-green-600 text-white px-4 py-3 rounded-t text-sm font-medium space-y-0.5">
        <p><span className="font-bold">Stream:</span> {stream.toUpperCase()}</p>
        <p><span className="font-bold">Name:</span> {data.student_name}</p>
        <p><span className="font-bold">Student ID:</span> {data.student_id}</p>
      </div>

      {/* Part A */}
      <div className="bg-[#0288d1] text-white px-4 py-2 text-sm font-semibold mt-0">Part A</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0288d1] text-white">
              <th className="border border-gray-300 px-3 py-2 text-left">Subject</th>
              <th className="border border-gray-300 px-3 py-2">Theory Marks</th>
              <th className="border border-gray-300 px-3 py-2">Internal Marks</th>
              <th className="border border-gray-300 px-3 py-2">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">English</td>
              <td className="border border-gray-300 px-3 py-2 text-center">{val(data, 'english_theory')}</td>
              <td className="border border-gray-300 px-3 py-2 text-center">{val(data, 'english_ia')}</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-medium">{val(data, 'english_total')} P</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">Language</td>
              <td className="border border-gray-300 px-3 py-2 text-center">{val(data, 'language_theory')}</td>
              <td className="border border-gray-300 px-3 py-2 text-center">{val(data, 'language_ia')}</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-medium">{val(data, 'language_total')} P</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-3 py-2 font-bold" colSpan={1}>Part A Total</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-bold" colSpan={3}>{data.part1_total ?? '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Part B */}
      <div className="bg-[#0288d1] text-white px-4 py-2 text-sm font-semibold">Part B</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0288d1] text-white">
              <th className="border border-gray-300 px-3 py-2 text-left">Subject</th>
              <th className="border border-gray-300 px-3 py-2">Theory Marks</th>
              <th className="border border-gray-300 px-3 py-2">Internal Marks</th>
              <th className="border border-gray-300 px-3 py-2">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((sub, i) => (
              <tr key={sub.label} className={i % 2 === 1 ? 'bg-gray-50' : 'hover:bg-gray-50'}>
                <td className="border border-gray-300 px-3 py-2">{sub.label}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{val(data, sub.theory)}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{val(data, sub.ia)}</td>
                <td className="border border-gray-300 px-3 py-2 text-center font-medium">{val(data, sub.total)} P</td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-3 py-2 font-bold">Part B Total</td>
              <td className="border border-gray-300 px-3 py-2 text-center font-bold" colSpan={3}>{data.part2_total ?? '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Grand total */}
      <div className="bg-green-600 text-white px-4 py-3 rounded-b text-sm space-y-0.5">
        <p><span className="font-bold">GRAND TOTAL MARKS:</span> {data.grand_total ?? '—'}</p>
        <p><span className="font-bold">PERCENTAGE:</span> {data.percentage ?? '—'}%</p>
        <p><span className="font-bold">FINAL RESULT:</span> {data.result ?? '—'}</p>
      </div>

      {passed && (
        <p className="text-center text-green-700 font-bold mt-4 text-base">CONGRATULATIONS !!!</p>
      )}
    </div>
  )
}

export default function Result() {
  const [stream, setStream] = useState('')
  const [studentId, setStudentId] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSearch(e) {
    e.preventDefault()
    if (!stream) return setError('Please select a stream first.')
    if (!studentId.trim()) return setError('Please enter your Student ID.')
    setLoading(true); setError(''); setResult(null)
    try {
      const res = await fetch(
        `http://localhost:5000/api/result?student_id=${encodeURIComponent(studentId)}&table=${stream}`
      )
      const data = await res.json()
      if (!res.ok || data.message) {
        setError(data.message || 'No result found.')
      } else {
        setResult(data)
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <div
        className="w-full flex items-center justify-center py-8"
        style={{ background: 'linear-gradient(135deg,#1a3974,#0288d1)' }}
      >
        <div className="text-center text-white px-4">
          <p className="text-xs font-semibold tracking-widest opacity-80 mb-1 uppercase">
            Department of Pre-University Education, Karnataka
          </p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            PUC Examination Results
          </h1>
        </div>
      </div>

      <section className="py-10 bg-gray-50 min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-4">

          {/* Stream tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {STREAMS.map(s => (
              <button
                key={s}
                onClick={() => { setStream(s.toLowerCase()); setResult(null); setError(''); setStudentId('') }}
                className={`px-5 py-2 rounded border-2 font-bold text-sm transition-colors ${
                  stream === s.toLowerCase()
                    ? 'bg-[#0288d1] border-[#0288d1] text-white'
                    : 'border-[#0288d1] text-[#0288d1] bg-white hover:bg-[#0288d1] hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mb-4">
            {stream ? `Stream: ${stream.toUpperCase()}` : 'Please select your stream above'}
          </p>

          {/* Search form */}
          <form onSubmit={handleSearch} className="flex gap-2 justify-center mb-2">
            <input
              type="text"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              placeholder="Enter Student ID"
              className="border border-gray-300 rounded px-4 py-2.5 text-sm w-56 focus:outline-none focus:border-[#0288d1]"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 text-sm font-bold text-white rounded disabled:opacity-60"
              style={{ background: '#e39a2d' }}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>

          {error && (
            <p className="text-center text-red-600 text-sm mt-3 font-medium">{error}</p>
          )}

          {result && <ResultCard data={result} stream={stream} />}
        </div>
      </section>
    </div>
  )
}
