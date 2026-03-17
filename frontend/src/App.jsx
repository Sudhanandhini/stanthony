import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// ── Existing pages ────────────────────────────────────────────────────────────
import Home       from './pages/Home'
import About      from './pages/About'
import Courses    from './pages/Courses'
import Facilities from './pages/Facilities'
import Faculty    from './pages/Faculty'
import Gallery    from './pages/Gallery'
import Activities from './pages/Activities'
import Bulletin   from './pages/Bulletin'
import Admission  from './pages/Admission'
import Contact    from './pages/Contact'

// ── About Us sub-pages ────────────────────────────────────────────────────────
import Patron                from './pages/Patron'
import StAnthonyInstitutions from './pages/Stanthonyinstitutions'
import AboutTrust            from './pages/Abouttrust'
import PresidentsMessage     from './pages/Presidentsmessage'

// ── Courses sub-pages ─────────────────────────────────────────────────────────
import GlobalAcademy from './pages/Globalacademy'
import PUC           from './pages/Puc'
import Degree        from './pages/Degree'

import Othercourses from './pages/Othercourses'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>

            {/* ── Main pages ── */}
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/courses"    element={<Courses />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/faculty"    element={<Faculty />} />
            <Route path="/gallery"    element={<Gallery />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/bulletin"   element={<Bulletin />} />
            <Route path="/admission"  element={<Admission />} />
            <Route path="/contact"    element={<Contact />} />

            {/* ── About Us sub-pages ── */}
            <Route path="/about/patron"             element={<Patron />} />
            <Route path="/about/institutions"       element={<StAnthonyInstitutions />} />
            <Route path="/about/trust"              element={<AboutTrust />} />
            <Route path="/about/presidents-message" element={<PresidentsMessage />} />

            {/* ── Courses sub-pages ── */}
            <Route path="/courses/global-academy" element={<GlobalAcademy />} />
            <Route path="/courses/puc"            element={<PUC />} />
            <Route path="/courses/degree"         element={<Degree />} />

              <Route path="/courses/other-courses"   element={<Othercourses />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}