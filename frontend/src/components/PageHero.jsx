// src/components/PageHero.jsx
// Reusable hero banner used on all About / inner pages
// Usage: <PageHero title="PATRON" />

export default function PageHero({ title, breadcrumb = [] }) {
  return (
    <>
      {/* Hero image strip */}
      <div className="relative w-full overflow-hidden" style={{ height: 200 }}>
        {/* Background – replace with a real campus photo via CSS or <img> */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/campus-banner.jpg')`,
            filter: 'brightness(0.85)',
          }}
        />
        {/* Tint overlay */}
        <div className="absolute inset-0 bg-navy opacity-30" />
      </div>

      {/* Blue title bar */}
      <div
        className="w-full text-white text-center font-bold text-xl sm:text-2xl tracking-widest py-3"
        style={{ background: '#1565c0' }}
      >
        {title}
      </div>

      {/* Optional breadcrumb */}
      {breadcrumb.length > 0 && (
        <div className="container mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-1">
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-300">›</span>}
              <span className={i === breadcrumb.length - 1 ? 'text-[#0288d1] font-semibold' : ''}>
                {crumb}
              </span>
            </span>
          ))}
        </div>
      )}
    </>
  )
}