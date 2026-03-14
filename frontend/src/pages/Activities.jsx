import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const events = [
  {
    month: 'March 2026',
    items: [
      { title: 'Excursion organized by St. Anthony\'s PU College', date: 'March 10, 2026', type: 'Excursion' },
      { title: 'SPECTRUM 2025 - A Fest of Flavor and Rhythm', date: 'March 5, 2026', type: 'Cultural Fest' },
    ],
  },
  {
    month: 'February 2026',
    items: [
      { title: 'Anthonian Premier League (APL) – Season 3', date: 'Feb 20, 2026', type: 'Sports' },
      { title: 'District Level Kabbaddi (Girls) Tournament', date: 'Feb 15, 2026', type: 'Sports' },
    ],
  },
  {
    month: 'January 2026',
    items: [
      { title: 'Annual Sports and Athletics Meet', date: 'Jan 25, 2026', type: 'Sports' },
      { title: 'Commencement of 1st Exam - 1st & 2nd PUC 2026', date: 'Jan 10, 2026', type: 'Academics' },
    ],
  },
]

const newsItems = [
  {
    title: 'Workshop on NEET, K-CET & Competitive Exams',
    summary: 'The programme began at 9:20 AM in the college campus with the welcome of our chief guests. St. Anthony\'s PU College organized a workshop for students to have a better knowledge about the NEET, CET & other competitive exams. Guest of honor, Rev Fr. Robin Victor D\'Souza, the Director of St. Anthony\'s Institutions, inaugurated the events by an interactive session with a student regarding the facts of competitive exams in the current scenario.',
  },
  {
    title: 'Independence Day celebration 2025',
    summary: 'The college celebrated Independence Day with great enthusiasm and patriotism. Students performed cultural programs showcasing national pride. The Principal unfurled the national flag and addressed the gathering.',
  },
  {
    title: 'International Yoga Day 2025-2026',
    summary: 'Celebrating International Yoga Day with an early morning yoga session on campus. Students and faculty participated enthusiastically promoting health and wellness.',
  },
]

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay()

function Calendar() {
  const [date, setDate] = useState(new Date(2026, 2)) // March 2026
  const year = date.getFullYear()
  const month = date.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const dayNames = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  // Adjust firstDay: 0=Sun → 6, 1=Mon → 0 ...
  const startPad = (firstDay === 0 ? 6 : firstDay - 1)

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between bg-gray-100 px-3 py-2">
        <button onClick={() => setDate(new Date(year, month - 1))} className="p-1 hover:bg-gray-200 rounded">
          <ChevronLeft size={16} />
        </button>
        <span className="font-semibold text-sm text-gray-800">{monthNames[month]} {year}</span>
        <button onClick={() => setDate(new Date(year, month + 1))} className="p-1 hover:bg-gray-200 rounded">
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 border-b">
        {dayNames.map((d) => (
          <div key={d} className="text-center text-xs font-semibold text-gray-500 py-1.5">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {Array.from({ length: startPad }).map((_, i) => (
          <div key={`pad-${i}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isToday = day === 14 && month === 2 && year === 2026
          return (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-teal hover:text-white transition-colors rounded ${isToday ? 'bg-maroon text-white font-bold' : 'text-gray-700'}`}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Activities() {
  return (
    <div>
      <div className="bg-gradient-to-r from-navy to-maroon text-white py-10 text-center">
        <h1 className="text-3xl font-bold tracking-widest uppercase font-display">ACTIVITIES & EVENTS</h1>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Calendar + Events */}
            <div className="lg:w-1/2 space-y-6">
              <Calendar />

              {events.map((group) => (
                <div key={group.month}>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-wider mb-2 border-b-2 border-teal pb-1">{group.month}</h3>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item.title} className="bg-white rounded-lg p-3 shadow-sm flex gap-3 items-start">
                        <div className="bg-maroon text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">{item.type}</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Latest News */}
            <div className="lg:w-1/2">
              <div className="bg-teal text-white font-bold text-center py-2.5 text-sm tracking-wider rounded-t">
                LATEST NEWS
              </div>
              <div className="bg-white border border-teal rounded-b shadow divide-y">
                {newsItems.map((n) => (
                  <div key={n.title} className="p-4">
                    <h4 className="font-bold text-navy text-sm mb-2">{n.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{n.summary}</p>
                    <button className="text-maroon text-xs font-bold mt-2 hover:underline">READ MORE</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
