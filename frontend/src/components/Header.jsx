import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logofinak2.png'

const navItems = [
  { label: 'HOME', path: '/' },
  {
    label: 'ABOUT US',
    path: '/about',
    dropdown: [
      { label: 'PATRON',                    path: '/about/patron' },
      { label: "ST ANTHONY'S INSTITUTIONS", path: '/about/institutions' },
      { label: 'ABOUT TRUST',               path: '/about/trust' },
      { label: "PRESIDENT'S MESSAGE",       path: '/about/presidents-message' },
    ],
  },
  {
    label: 'COURSES',
    path: '/courses',
    dropdown: [
      { label: "ST.ANTHONY'S GLOBAL ACADEMY",          path: 'https://stanthonyglobalacademy.com' },
      { label: 'PUC',                                  path: '/courses/puc' },
      { label: 'DEGREE (UG / MBA) – ST. ANTHONY\'S COLLEGE', path: 'https://stanthonys.edu.in' },
    ],
  },
  { label: 'FACILITIES',          path: '/facilities' },
  { label: 'FACULTY',             path: '/faculty' },
  { label: 'PHOTO GALLERY',       path: '/gallery' },
  { label: 'ACTIVITIES & EVENTS', path: '/activities' },
  { label: 'ANTHONIAN BULLETIN',  path: '/bulletin' },
  { label: 'ADMISSION',           path: '/admission' },
    { label: 'CONTACT',           path: '/contact' },
]

function ThreeLines({ align = 'left' }) {
  return (
    <div className={`flex flex-col gap-[3px] w-full ${align === 'right' ? 'items-end' : 'items-start'}`}>
      <div className="h-[2px] w-3/4 bg-green-600 rounded-sm" />
      <div className="h-[2px] w-1/2 bg-navy    rounded-sm" />
      <div className="h-[2px] w-1/4 bg-maroon  rounded-sm" />
    </div>
  )
}

export default function Header() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [mobileOpen,   setMobileOpen]   = useState({})

  const toggleMobile = (label) =>
    setMobileOpen((prev) => ({ ...prev, [label]: !prev[label] }))

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-md w-full overflow-visible">

      {/* ── Row 1: Maroon ticker ── */}
      <div className="w-full bg-maroon text-white text-[11px] py-[5px] flex items-center overflow-hidden">
        <div className="flex-1 overflow-hidden min-w-0">
          <span className="marquee-text inline-block whitespace-nowrap font-medium tracking-wide">
            Welcome to St. Anthony's Institutions, Bengaluru &nbsp;|&nbsp;
            Recognized by Government of Karnataka &nbsp;|&nbsp;
            Admissions Open 2025–26 &nbsp;|&nbsp;
            Special Coaching for CET, NEET, JEE Mains &amp; Advanced
          </span>
        </div>
        <div className="hidden sm:block flex-shrink-0 font-bold text-[11px] tracking-widest uppercase px-4 whitespace-nowrap">
          ST ANTHONY'S PU COLLEGE
        </div>
      </div>

      {/* ── Row 2: Logo + Nav ── */}
      <div className="w-full container mx-auto flex items-stretch">

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0 px-3 py-2">
          <img src={logo} alt="St. Anthony's Institutions"
            className="w-[220px] xl:w-[280px] h-auto object-contain" />
        </Link>

        {/* Right column */}
        <div className="flex flex-col flex-1">

          {/* College name + top lines */}
          <div className="flex items-center pt-2 pb-1 gap-2">
            <div className="flex-1 min-w-0"><ThreeLines align="left" /></div>
            <span className="hidden xl:block flex-shrink-0 font-extrabold text-navy text-[15px] tracking-wider uppercase whitespace-nowrap pr-1">
              ST ANTHONY'S PU COLLEGE
            </span>
          </div>

          {/* Desktop nav — NO overflow on this element; it would clip the dropdowns */}
          <nav className="hidden lg:flex items-stretch flex-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className={`flex items-center gap-[3px] px-[6px] h-full
                      text-[12px] xl:text-[16px] font-bold tracking-wide transition-colors duration-150 whitespace-nowrap
                      ${dropdownOpen === item.label
                        ? 'bg-purple text-white'
                        : 'text-gray-800 hover:bg-purple hover:text-white'
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={10} className="ml-0.5" />
                  </button>

                  {/* Dropdown panel — no max-height, no overflow, fully visible */}
                  <div
                    className={`absolute top-full left-0 bg-[#0288d1] min-w-[280px] z-[9999] shadow-xl
                      transition-all duration-150
                      ${dropdownOpen === item.label
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible pointer-events-none'
                      }`}
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {item.dropdown.map((sub, i) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-5 py-[13px] text-[16px] font-semibold text-white
                          transition-colors hover:bg-[#0277b5]
                          ${i < item.dropdown.length - 1 ? 'border-b border-white/20' : ''}
                          ${isActive ? 'bg-[#01579b]' : ''}`
                        }
                        onClick={() => setDropdownOpen(null)}
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-[6px] flex-shrink-0
                    text-[12px] xl:text-[16px] font-bold tracking-wide transition-colors duration-150 whitespace-nowrap
                    ${item.highlight
                      ? isActive
                        ? 'bg-maroon text-white'
                        : 'bg-maroon text-white hover:bg-maroon-dark'
                      : isActive
                        ? 'bg-purple text-white'
                        : 'text-gray-800 hover:bg-purple hover:text-white'
                    }`
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Bottom lines */}
          <div className="pt-1 pb-2">
            <ThreeLines align="right" />
          </div>

        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex-shrink-0 px-3 self-center text-maroon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Nav ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    className={`w-full flex items-center justify-between px-5 py-3 text-sm font-bold border-b border-gray-100
                      ${mobileOpen[item.label] ? 'bg-purple text-white' : 'text-gray-800 hover:bg-purple hover:text-white'}
                      transition-colors`}
                    onClick={() => toggleMobile(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${mobileOpen[item.label] ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileOpen[item.label] && (
                    <div className="bg-[#0288d1]">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className="block pl-8 pr-5 py-2.5 text-sm font-semibold text-white border-b border-white/20 hover:bg-[#0277b5] transition-colors"
                          onClick={() => { setMenuOpen(false); setMobileOpen({}) }}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-5 py-3 text-sm font-bold border-b border-gray-100 transition-colors
                    ${item.highlight
                      ? 'bg-maroon text-white hover:bg-maroon-dark'
                      : isActive
                        ? 'bg-purple text-white'
                        : 'text-gray-800 hover:bg-purple hover:text-white'
                    }`
                  }
                  onClick={() => { setMenuOpen(false); setMobileOpen({}) }}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}