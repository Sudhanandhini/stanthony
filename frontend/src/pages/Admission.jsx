import { Link } from 'react-router-dom'
import { ChevronRight, Download, FileText } from 'lucide-react'

const scienceCombos = [
  { code: 'PCMB', subjects: 'Physics, Chemistry, Mathematics, Biology' },
  { code: 'PCMCs', subjects: 'Physics, Chemistry, Mathematics, Computer Science' },
  { code: 'PCME', subjects: 'Physics, Chemistry, Mathematics, Electronics' },
]

const commerceCombos = [
  { code: 'CEBA', subjects: 'Computer Science, Economics, Business Studies, Accountancy' },
  { code: 'SEBA', subjects: 'Statistics, Economics, Business Studies, Accountancy' },
  { code: 'HEBA', subjects: 'History, Economics, Business Studies, Accountancy' },
  { code: 'MEBA', subjects: 'Basic Maths, Economics, Business Studies, Accountancy' },
]

const steps = [
  { step: '01', title: 'Download Application Form', desc: 'Download the PUC Application Form from the link below or collect it from the college office.' },
  { step: '02', title: 'Fill the Form', desc: 'Fill in the required details accurately including personal information, stream preference, and previous marks.' },
  { step: '03', title: 'Attach Documents', desc: 'Attach necessary documents: SSLC/10th Mark Sheet, Transfer Certificate, Passport photos.' },
  { step: '04', title: 'Submit Application', desc: 'Submit the completed form at the college admissions office or email to stanthonybangalore@gmail.com.' },
  { step: '05', title: 'Verification & Approval', desc: 'Your application will be reviewed. You\'ll be notified about your admission status.' },
  { step: '06', title: 'Fee Payment', desc: 'Pay the admission fee and collect your student ID to begin your journey at St. Anthony\'s.' },
]

export default function Admission() {
  return (
    <div>
      <div className="bg-gradient-to-r from-navy to-maroon text-white py-10 text-center">
        <h1 className="text-3xl font-bold tracking-widest uppercase font-display">ADMISSION</h1>
        <p className="text-teal mt-2 text-sm font-medium">Admissions Open 2025 – 2026</p>
      </div>

      {/* Stream Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy text-center mb-8 uppercase tracking-wide">Available Streams</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Science */}
            <div className="border-4 border-sci-green rounded-xl overflow-hidden shadow-lg">
              <div className="bg-sci-green text-white text-center font-bold py-3 text-lg tracking-wider">PU-SCIENCE</div>
              <div className="p-6">
                {scienceCombos.map((c) => (
                  <div key={c.code} className="mb-3">
                    <span className="font-bold text-sci-green">{c.code}: </span>
                    <span className="text-gray-600 text-sm">{c.subjects}</span>
                  </div>
                ))}
                <div className="mt-4 bg-gray-50 rounded p-3">
                  <p className="text-red-600 font-bold text-sm text-center mb-2">SPECIAL COACHING FOR</p>
                  <div className="space-y-1">
                    {['CET', 'NEET', 'JEE Mains', 'JEE Advanced', 'CA-CPT', 'CMA', 'Soft Skills'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-sci-green" />
                        <span className="font-bold text-navy text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Commerce */}
            <div className="border-4 border-com-blue rounded-xl overflow-hidden shadow-lg">
              <div className="bg-com-blue text-white text-center font-bold py-3 text-lg tracking-wider">PU-COMMERCE</div>
              <div className="p-6">
                {commerceCombos.map((c) => (
                  <div key={c.code} className="mb-3">
                    <span className="font-bold text-com-blue">{c.code}: </span>
                    <span className="text-gray-600 text-sm">{c.subjects}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arts */}
            <div className="border-4 border-arts-brown rounded-xl overflow-hidden shadow-lg">
              <div className="bg-arts-brown text-white text-center font-bold py-3 text-lg tracking-wider">PU-ARTS</div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="font-bold text-arts-brown">HEGS: </span>
                  <span className="text-gray-600 text-sm">History, Economics, Geography, Sociology</span>
                </div>
                <div className="mt-4 bg-gray-50 rounded p-3">
                  <p className="text-gray-700 text-sm font-semibold mb-2">Languages Offered:</p>
                  {['English', 'Kannada', 'Hindi', 'French'].map((l) => (
                    <div key={l} className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-arts-brown" />
                      <span className="text-gray-600 text-sm">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Admission Steps */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-navy text-center mb-8 uppercase tracking-wide">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.step} className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-maroon">
                  <div className="text-3xl font-bold text-teal mb-2">{s.step}</div>
                  <h4 className="font-bold text-navy text-sm mb-2">{s.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Downloads */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-navy text-center mb-6 uppercase tracking-wide">Download Forms</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'PUC Brochure', icon: <FileText size={20} /> },
                { label: 'PUC Prospectus', icon: <Download size={20} /> },
                { label: 'PUC Application Form 1', icon: <Download size={20} /> },
                { label: 'PUC Application Form 2', icon: <Download size={20} /> },
              ].map((d) => (
                <button
                  key={d.label}
                  className="flex items-center gap-2 bg-maroon text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-maroon-dark transition-colors shadow-md"
                >
                  {d.icon}
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact for admission */}
          <div className="mt-10 bg-navy text-white rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">For Admission Enquiry</h3>
            <p className="text-gray-300 text-sm mb-4">Contact us for more information about admissions</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div>
                <span className="text-teal font-semibold">Phone: </span>
                <span>080-29741973, +91-9448949867</span>
              </div>
              <div>
                <span className="text-teal font-semibold">Email: </span>
                <span>stanthonybangalore@gmail.com</span>
              </div>
            </div>
            <Link to="/contact" className="mt-4 inline-block bg-maroon text-white font-bold px-8 py-3 rounded-lg hover:bg-maroon-dark transition-colors">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
