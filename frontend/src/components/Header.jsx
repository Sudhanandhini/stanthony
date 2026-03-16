import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logofinak2.png'

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about' },
  {
    label: 'COURSES',
    path: '/courses',
    dropdown: [
      { label: 'PU Science', path: '/courses/science' },
      { label: 'PU Commerce', path: '/courses/commerce' },
      { label: 'PU Arts', path: '/courses/arts' },
    ],
  },
  { label: 'FACILITIES', path: '/facilities' },
  { label: 'FACULTY', path: '/faculty' },
  { label: 'PHOTO GALLERY', path: '/gallery' },
  { label: 'ACTIVITIES & EVENTS', path: '/activities' },
  { label: 'ANTHONIAN BULLETIN', path: '/bulletin' },
  { label: 'ADMISSION', path: '/admission' },
]

function ThreeLines({ align = 'left' }) {
  return (
    <div className={`flex flex-col gap-[3px] w-full ${align === 'right' ? 'items-end' : 'items-start'}`}>
      <div className="h-[2px] w-3/4  bg-sci-green rounded-sm" />
      <div className="h-[2px] w-1/2   bg-navy    rounded-sm" />
      <div className="h-[2px] w-1/4   bg-maroon  rounded-sm" />
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">

      {/* ══════════════════════════════════════
          ROW 1 — Full width maroon ticker
      ══════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════
          ROW 2 — max-w-5xl centred container
      ══════════════════════════════════════ */}
      <div className="w-full container mx-auto flex items-stretch">

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0 px-3 py-2">
          <img
            src={logo}
            alt="St. Anthony's Institutions"
            className=" w-[300px] h-auto object-contain"
          />
        </Link>

        {/* Right column */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Sub-row A — lines + college name (hidden on mobile) */}
          <div className="flex items-center pt-2 pb-1 gap-2">
            <div className="flex-1 min-w-0">
              <ThreeLines align="left" />
            </div>
            <span className="hidden lg:block flex-shrink-0 font-extrabold text-navy text-[16px] tracking-wider uppercase whitespace-nowrap pr-1">
              ST ANTHONY'S PU COLLEGE
            </span>
          </div>

          {/* Sub-row B — desktop nav */}
          <nav className="hidden lg:flex items-stretch flex-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className={`flex items-center gap-[3px] px-[7px] h-full
                      text-[16px] font-bold tracking-wide transition-colors duration-150 whitespace-nowrap
                      ${dropdownOpen === item.label
                        ? 'bg-purple text-white'
                        : 'text-gray-800 hover:bg-purple hover:text-white'
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={10} />
                  </button>

                  <div
                    className={`absolute top-full left-0 bg-teal min-w-[200px] z-50 shadow-xl
                      transition-all duration-200
                      ${dropdownOpen === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1'
                      }`}
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {item.dropdown.map((sub, i) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={`block px-5 py-[10px] text-[16px] font-semibold text-white
                          hover:bg-teal-dark transition-colors
                          ${i < item.dropdown.length - 1 ? 'border-b border-white/20' : ''}`}
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
                    `flex items-center px-[7px]
                    text-[16px] font-bold tracking-wide transition-colors duration-150 whitespace-nowrap
                    ${isActive
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

          {/* Sub-row C — 3 lines right-aligned */}
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

      {/* ══════════════════════════════════════
          MOBILE NAV
      ══════════════════════════════════════ */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          {navItems.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm font-bold border-b border-gray-100 transition-colors
                  ${isActive ? 'bg-purple text-white' : 'text-gray-800 hover:bg-purple hover:text-white'}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.dropdown?.map((sub) => (
                <NavLink
                  key={sub.path}
                  to={sub.path}
                  className="block pl-9 pr-5 py-2 text-sm font-semibold border-b border-gray-100 bg-teal/10 text-gray-700 hover:bg-teal hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}