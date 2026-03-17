import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ban43 from '../assets/13-1.jpg'

function ActivityCard({ activity }) {
  const paragraphs = (activity.content || '').split('\n').filter(p => p.trim())

  return (
    <div
      className="rounded-lg overflow-hidden mb-6 mx-auto"
      style={{ background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', maxWidth: 1100 }}
    >
      <div className="flex flex-col sm:flex-row">

        {/* Left: Image + title */}
        <div className="sm:w-[340px] flex-shrink-0">
          <div className="overflow-hidden" style={{ height: 280, background: '#d0d8e8' }}>
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-bold text-[15px] text-gray-800 leading-snug">{activity.title}</h3>
          </div>
        </div>

        {/* Right: Title + content + button */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-[14.5px] text-gray-800 mb-3 leading-snug">{activity.title}</h3>
            <div className="space-y-2">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[12.5px] text-gray-600 leading-6">{para}</p>
              ))}
            </div>
          </div>
          <div className="mt-5 text-center">
            <Link
              to={`/activities/${activity.slug}`}
              className="inline-block px-6 py-2 text-white text-[13px] font-semibold rounded transition-opacity hover:opacity-90"
              style={{ background: '#1a3974' }}
            >
              Click To View More
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(r => r.json())
      .then(data => { setActivities(data); setLoading(false) })
      .catch(() => { setError('Could not load activities.'); setLoading(false) })
  }, [])

  return (
    <div>
      <div className="text-center">
        <img src={ban43} alt="Activities and Events" style={{ width: '100%', display: 'block' }} />
      </div>

      <section
        className="py-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f5f0e8'/%3E%3Cpath d='M50 10 C40 20,20 20,10 30 C20 40,20 60,10 70 C20 80,40 80,50 90 C60 80,80 80,90 70 C80 60,80 40,90 30 C80 20,60 20,50 10Z' fill='none' stroke='%23e8dcc8' stroke-width='0.8' opacity='0.5'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23e0d4c0' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
          backgroundColor: '#f5f0e8',
        }}
      >
        <div className="mx-auto px-4 max-w-6xl">
          {loading && (
            <p className="text-center text-gray-500 py-10">Loading activities...</p>
          )}
          {error && (
            <p className="text-center text-red-500 py-10">{error}</p>
          )}
          {!loading && !error && activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
    </div>
  )
}
