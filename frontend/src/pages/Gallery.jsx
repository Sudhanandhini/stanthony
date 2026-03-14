import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const galleryCategories2026 = [
  'Excursion organized by St. Anthony\'s PU College',
  'Christmas Celebration',
  'SPECTRUM 2025 - A Fest of Flavor and Rhythm',
  'Beats & Bites - Campus Celebration - Ignite the vibe of color and culture',
  'Seminar on Artificial Intelligence & Statistics at Christ University',
  'Director\'s Birthday Celebration',
  'Annual Sports and Athletics Meet',
  'ANTHONIAN PREMIER LEAGUE (APL) – SEASON 3',
  'District Level Kabbaddi (Girls) Tournament',
  'Independence Day celebration 2025',
  'Commencement of 1st Exam - 1st & 2nd PUC 2026',
  'Investiture Ceremony 2025',
  'Felicitation for the Anthonian Academic Achievers 2025-2026',
  'Celebrating International Yoga Day 2025-2026',
  'Parent Orientation Programme',
  'Student Orientation Programme 2025 - 2026',
  'Inauguration of the Academic year 2025-26',
  '1st PU result 2025',
  'Staff Prize 2025',
  'Commencement of 1st PUC Annual Examinations',
  'PU Day Celebration',
  'Staff & Students Photos - 1st & 2nd Year PU Students 2025-25',
]

const galleryCategories2025 = [
  'Christmas Day 2024',
  'Academic Concourse',
  'Kannada Rajyotsava Celebration 2024',
  'Beats & Bites 2024',
  'ANTHONIAN ATHLETIC MEET 2024',
  'Anthonian Premier League (APL) - Season 2',
  'Youth Bharat Abhiyan & International Democracy Day',
  'Midterm Exams Commence for Pre-University Students',
  'Faculty Development Program',
  'Seminar on Career in Corporate',
  'District Level Staff Badminton Netball Tournament 2024-2025',
  'Independence Day 2024',
  'Workshop on NEET, K-CET & COMPETITIVE EXAMS',
  'Freshers Day 2024',
]

const galleryCategories2024 = [
  'Parent Orientation Programme 2024',
  'Investiture ceremony 2024',
  'Felicitation for the Anthonian Academic Achievers 2024',
  'International Yoga Day 2024',
  'Student Orientation Program 2024',
  'Inauguration of the Academic year 2024-25',
  'PU Day Celebration And Farewell Programme',
  'Science Exhibition 2024',
  'Christmas Programme 2023',
  'Kannada Rajyotsava 2023',
  'Beats & Bites – Campus Celebration',
  'Anthonian Athletic Meet – 2023',
  'Anthonian Premier League (APL)',
  'Girls Welfare Programme',
]

const mainGalleryPhotos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Event Photo ${i + 1}`,
  category: 'Anthonian PU Day Celebration',
}))

function AccordionSection({ title, items }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-navy rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-navy text-white px-4 py-3 font-semibold text-sm text-left hover:bg-navy"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="p-3 bg-gray-50">
          {items.map((item) => (
            <button
              key={item}
              className="w-full text-left text-sm text-gray-700 py-2 px-3 hover:bg-teal hover:text-white rounded mb-1 flex justify-between items-center transition-colors border border-gray-200"
            >
              {item}
              <ChevronDown size={14} className="flex-shrink-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Gallery() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-40 bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 flex items-center justify-center">
          <div className="text-6xl opacity-30">📷</div>
        </div>
        <div className="absolute bottom-0 w-full bg-navy bg-opacity-90 text-center py-3">
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase font-display">PHOTO GALLERY</h1>
        </div>
      </div>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category selector */}
          <div className="flex items-center justify-between bg-teal text-white px-4 py-2 rounded-t mb-0">
            <span className="font-semibold text-sm">Anthonian PU Day Celebration</span>
            <ChevronDown size={16} />
          </div>

          {/* Photo grid */}
          <div className="bg-white p-4 shadow-md mb-6">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {mainGalleryPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="aspect-video bg-gradient-to-br from-navy to-maroon rounded overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="text-center text-white p-2">
                    <div className="text-2xl mb-1">📸</div>
                    <p className="text-[10px]">{photo.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  className={`w-7 h-7 rounded text-xs font-semibold transition-colors ${p === 1 ? 'bg-maroon text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion categories */}
          <div className="space-y-1">
            {galleryCategories2026.map((cat) => (
              <button
                key={cat}
                className="w-full text-left text-sm text-gray-700 py-2.5 px-4 flex justify-between items-center bg-white border border-gray-200 hover:bg-teal hover:text-white transition-colors rounded"
              >
                {cat}
                <ChevronDown size={14} className="flex-shrink-0" />
              </button>
            ))}

            <AccordionSection title="ANTHONIAN BULLETIN 2024 - 2025" items={galleryCategories2025} />
            <AccordionSection title="ANTHONIAN BULLETIN 2023 - 2024" items={galleryCategories2024} />
          </div>
        </div>
      </section>
    </div>
  )
}
