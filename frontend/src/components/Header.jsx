import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

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
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top ticker bar */}
      <div className="bg-maroon text-white text-xs py-1 overflow-hidden flex items-center">
        <div className="flex-1 overflow-hidden">
          <span className="marquee-text inline-block">
            Welcome to St. Anthony's Institutions, Bengaluru &nbsp;|&nbsp; Recognized by Government of Karnataka &nbsp;|&nbsp; Admissions Open 2025–26 &nbsp;|&nbsp; Special Coaching for CET, NEET, JEE Mains &amp; Advanced
          </span>
        </div>
        <div className="flex-shrink-0 bg-navy text-white px-4 py-1 font-semibold text-xs ml-2 whitespace-nowrap">
          ST ANTHONY'S PU COLLEGE
        </div>
      </div>

      {/* Logo + Nav */}
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center overflow-hidden border-2 border-maroon">
            <div className="text-center">
              <div className="text-white text-[7px] font-bold leading-tight">ST.</div>
              <div className="text-white text-[8px] font-bold leading-tight">ANTHONY'S</div>
              <div className="text-teal text-[5px] leading-tight">✦ ✦ ✦</div>
            </div>
          </div>
          <div>
            <div className="text-maroon font-bold text-xl leading-tight tracking-wide">ST. ANTHONY'S</div>
            <div className="text-navy font-bold text-lg leading-tight tracking-widest">INSTITUTIONS</div>
            <div className="text-gray-500 text-[10px] tracking-wider">KENGERI, BENGALURU</div>
            <div className="text-maroon text-[9px] italic">Capuchin Franciscan Fathers</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button
                  className="nav-link flex items-center gap-1 px-1 py-2 text-[12px] font-semibold hover:text-maroon"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {item.label}
                  <ChevronDown size={12} />
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-xl border-t-2 border-maroon min-w-[180px] z-50 transition-all duration-200 ${
                    dropdownOpen === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-maroon hover:text-white transition-colors"
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
                  `px-1 py-2 text-[12px] font-semibold transition-colors duration-200 ${
                    isActive ? 'text-maroon border-b-2 border-maroon' : 'text-gray-800 hover:text-maroon'
                  }`
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            )
          )}
          <Link to="/admission" className="ml-2 bg-purple-light text-white font-bold text-[12px] px-4 py-2 rounded hover:bg-purple transition-colors">
            ADMISSION
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Decorative line */}
      <div className="h-[3px] bg-gradient-to-r from-maroon via-navy to-teal" />

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className="block px-4 py-3 text-sm font-semibold text-gray-800 border-b hover:bg-gray-50 hover:text-maroon"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admission"
            className="block px-4 py-3 text-sm font-bold text-white bg-purple-light m-3 rounded text-center"
            onClick={() => setMenuOpen(false)}
          >
            ADMISSION
          </Link>
        </div>
      )}
    </header>
  )
}
