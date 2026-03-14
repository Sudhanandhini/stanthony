import { useState } from 'react'
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react'

const leadership = [
  { role: 'President, St. Anthony\'s Institutions', name: 'Rev. Fr. Robin Victor D\'Souza, OFM Cap.', qual: 'B.Ed, M.ph(France), MBA' },
  { role: 'Director, St. Anthony\'s Institutions', name: 'Rev. Fr. Charles J R Furtado.', qual: 'Executive Secretary – Capuchin Education Board' },
  { role: 'Principal, St. Anthony\'s PU College', name: 'Rev. Fr. Roshan Rosario, OFM Cap.', qual: 'B.Ph., B.Th., M.A. (Eco)' },
  { role: 'Principal, St Anthony\'s College', name: 'Rev. Fr. Joy Wilson D\'Souza, OFM Cap.', qual: 'M.Com, MBA' },
  { role: 'Academic Co-ordinator, St. Anthony\'s PU College', name: 'Rev. Fr. Clement Paul D\'Souza, OFM Cap.', qual: 'M.A.(Eco)' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
          <div className="text-center text-white opacity-20 text-8xl">✉</div>
        </div>
        <div className="absolute bottom-0 w-full bg-navy bg-opacity-90 py-3 text-center">
          <h1 className="text-3xl font-bold text-white tracking-widest uppercase font-display">CONTACT US</h1>
        </div>
      </div>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Map placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 overflow-hidden shadow flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin size={40} className="mx-auto mb-2 text-maroon" />
              <p className="font-semibold">St. Anthony's PU College</p>
              <p className="text-sm">Dubasipalya, Mysore Road, Kengeri, Bengaluru - 560 059</p>
              <a
                href="https://maps.google.com/?q=St+Anthony+PU+College+Kengeri+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon text-sm font-bold mt-2 inline-block hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy mb-4 border-b-2 border-maroon pb-2">Contact Information :</h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-bold text-navy">St Anthony's PU College,</p>
                  <p className="font-bold">St Anthony's College</p>
                  <p>Dubasipalya, Mysore Road,</p>
                  <p>Opp. R. V. College, Kengeri</p>
                  <p>Bangalore – 560 059.</p>
                  <p>Karnataka, India.</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-maroon flex-shrink-0" />
                    <span className="font-semibold">Phone:</span>
                    <span className="text-gray-700">080 – 29741973, +91-9448949867</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-maroon flex-shrink-0" />
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:stanthonybangalore@gmail.com" className="text-teal-dark hover:underline">stanthonybangalore@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-maroon flex-shrink-0" />
                    <a href="mailto:principalas65@gmail.com" className="text-teal-dark hover:underline">principalas65@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Globe size={16} className="text-maroon flex-shrink-0 mt-0.5" />
                    <div>
                      <a href="#" className="text-teal-dark hover:underline block">www.stanthonyscollege.edu.in</a>
                      <a href="#" className="text-teal-dark hover:underline block">www.stanthonys.edu.in</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-4 border-b-2 border-maroon pb-2">Leadership</h3>
                <div className="space-y-3">
                  {leadership.map((p) => (
                    <div key={p.name} className="bg-gray-50 rounded p-3 border-l-3 border-teal">
                      <p className="font-bold text-navy text-xs uppercase tracking-wide">{p.role}</p>
                      <p className="font-semibold text-gray-800 text-sm mt-0.5">{p.name}</p>
                      {p.qual && <p className="text-gray-500 text-xs">{p.qual}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-base font-bold text-navy mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { label: 'Facebook', color: 'bg-blue-700', icon: 'f' },
                    { label: 'YouTube', color: 'bg-red-600', icon: '▶' },
                    { label: 'Instagram', color: 'bg-pink-600', icon: '📷' },
                    { label: 'Twitter', color: 'bg-sky-500', icon: '𝕏' },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className={`${s.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm hover:opacity-90 transition-opacity`}
                    >
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:w-1/2">
              <div className="bg-maroon text-white text-center font-bold py-2.5 text-sm tracking-wider rounded-t">
                ENQUIRY
              </div>
              <div className="border border-maroon rounded-b p-6 shadow-md">
                {submitted && (
                  <div className="bg-green-100 text-green-800 rounded p-3 text-sm mb-4 font-semibold text-center">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Name (required)</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-maroon"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Email (required)</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-maroon"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-maroon"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-maroon resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal text-white font-bold py-2.5 rounded hover:bg-teal-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
