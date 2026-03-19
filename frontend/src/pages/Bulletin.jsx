import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'
import ban121 from "../assets/bull.webp"

function BulletinCard({ item }) {
  return (
    <a
      href={item.pdf_url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer group block"
    >
      <div className="bg-gray-50 p-6 flex items-center justify-center group-hover:bg-teal transition-colors">
        <div className="text-center">
          <div className="w-16 h-20 bg-white border border-red-200 rounded flex flex-col items-center justify-center shadow-sm relative">
            <div className="bg-red-600 text-white text-[8px] font-bold px-2 py-0.5 rounded-t absolute top-0 w-full text-center">PDF</div>
            <FileText size={28} className="text-red-500 mt-4" />
            <div className="text-[8px] text-gray-500 mt-1">Adobe</div>
          </div>
        </div>
      </div>
      <div className="bg-teal text-white text-center text-xs font-semibold py-1.5 px-2 leading-tight">
        {item.post_title}
      </div>
    </a>
  )
}

function AccordionBulletins({ title, items }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-navy rounded overflow-hidden mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-navy text-white px-5 py-3 font-semibold text-sm"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {items.map((item) => (
              <BulletinCard key={item.ID} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Bulletin() {
  const [bulletins, setBulletins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/bulletins')
      .then(r => r.json())
      .then(data => { setBulletins(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  // Group by academic year
  const grouped = bulletins.reduce((acc, b) => {
    const yr = b.academic_year
    const key = yr ? `${yr}-${yr + 1}` : 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(b)
    return acc
  }, {})

  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === 'Other') return 1
    if (b === 'Other') return -1
    return b.localeCompare(a)
  })

  const currentYear = sortedYears[0]
  const olderYears = sortedYears.slice(1)

  return (
    <div>
      {/* Hero */}
       <div className=" text-center">
               <img src={ban121} />
                </div>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading && (
            <p className="text-center text-gray-500 py-10">Loading bulletins...</p>
          )}

          {!loading && (
            <>
              {/* Current year bulletins grid */}
              {currentYear && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                  {grouped[currentYear].map((item) => (
                    <BulletinCard key={item.ID} item={item} />
                  ))}
                </div>
              )}

              {/* Previous year accordions */}
              {olderYears.map((yr) => (
                <AccordionBulletins
                  key={yr}
                  title={`ANTHONIAN BULLETIN ${yr}`}
                  items={grouped[yr] || []}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
