import { useState } from 'react'
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'

const currentBulletins = [
  { number: 18, label: 'Anthonian Bulletin 18' },
  { number: 17, label: 'Anthonian Bulletin 17' },
  { number: 16, label: 'Anthonian Bulletin 16' },
  { number: '15B', label: 'Anthonian Bulletin 15 B' },
  { number: '15A', label: 'Anthonian Bulletin 15 A' },
  { number: 14, label: 'Anthonian Bulletin 14' },
  { number: 13, label: 'Anthonian Bulletin 13' },
  { number: 12, label: 'Anthonian Bulletin 12' },
  { number: 11, label: 'Anthonian Bulletin 11' },
  { number: 10, label: 'Anthonian Bulletin 10' },
  { number: '09', label: 'Anthonian Bulletin 09' },
  { number: '08', label: 'Anthonian Bulletin 08' },
  { number: '07', label: 'Anthonian Bulletin 07' },
  { number: '06', label: 'Anthonian Bulletin 06' },
  { number: '05', label: 'Anthonian Bulletin 05' },
  { number: '04', label: 'Anthonian Bulletin 04' },
  { number: '03', label: 'Anthonian Bulletin 03' },
  { number: '02', label: 'Anthonian Bulletin 02' },
  { number: '01', label: 'Anthonian Bulletin 01 – Inauguration of Academic Year (1)' },
]

const prev2425 = Array.from({ length: 12 }, (_, i) => ({ number: i + 1, label: `Anthonian Bulletin 2024-25 No. ${i + 1}` }))
const prev2324 = Array.from({ length: 10 }, (_, i) => ({ number: i + 1, label: `Anthonian Bulletin 2023-24 No. ${i + 1}` }))

function BulletinCard({ item }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
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
        {item.label}
      </div>
    </div>
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
              <BulletinCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Bulletin() {
  return (
    <div>
      {/* Hero - cork board style */}
      <div className="relative overflow-hidden bg-amber-100 py-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #c8a96e 0, #c8a96e 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px',
            backgroundColor: '#d4a76a',
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-maroon font-display">Anthonian Bulletin</h1>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="grid grid-cols-5 gap-1.5 max-w-xs">
                {Array.from({ length: 15 }).map((_, i) => {
                  const colors = ['bg-yellow-100', 'bg-blue-100', 'bg-pink-100', 'bg-green-100', 'bg-orange-100']
                  return (
                    <div
                      key={i}
                      className={`w-10 h-10 ${colors[i % 5]} border border-white shadow-sm rounded-sm relative`}
                      style={{ transform: `rotate(${(Math.random() - 0.5) * 6}deg)` }}
                    >
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-maroon rounded-full opacity-60" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Current Bulletins Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {currentBulletins.map((item) => (
              <BulletinCard key={item.number} item={item} />
            ))}
          </div>

          {/* Previous year accordions */}
          <AccordionBulletins title="ANTHONIAN BULLETIN 2024 - 2025" items={prev2425} />
          <AccordionBulletins title="ANTHONIAN BULLETIN 2023 - 2024" items={prev2324} />
        </div>
      </section>
    </div>
  )
}
