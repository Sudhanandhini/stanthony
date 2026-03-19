import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from 'lucide-react'
import ban111 from "../assets/photogallery.png"

const WP_BASE = 'https://www.stanthonyscollege.edu.in/wp-content/uploads/photo-gallery'
const API_BASE = 'http://localhost:5000'
const PHOTOS_PER_PAGE = 12

// Normalize WordPress photo → common shape
function fromWP(photo) {
  return {
    id: photo.id,
    thumbSrc: photo.thumb_url ? WP_BASE + photo.thumb_url : null,
    fullSrc:  photo.image_url  ? WP_BASE + photo.image_url  : null,
    label: photo.alt || photo.filename || '',
  }
}

// Normalize admin photo → common shape
function fromAdmin(photo) {
  return {
    id: photo.id,
    thumbSrc: API_BASE + photo.image_path,
    fullSrc:  API_BASE + photo.image_path,
    label: photo.title || '',
  }
}

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index]
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={onClose}>
        <X size={28} />
      </button>
      <button
        className="absolute left-4 text-white hover:text-gray-300 p-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <ChevronLeft size={36} />
      </button>
      <img
        src={photo.fullSrc}
        alt={photo.label}
        className="max-h-[85vh] max-w-[85vw] object-contain"
        onClick={(e) => e.stopPropagation()}
        onError={(e) => { if (photo.thumbSrc) e.target.src = photo.thumbSrc }}
      />
      <button
        className="absolute right-4 text-white hover:text-gray-300 p-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <ChevronRight size={36} />
      </button>
      <div className="absolute bottom-4 text-white text-sm opacity-70">
        {index + 1} / {photos.length}
      </div>
    </div>
  )
}

function AccordionSection({ title, galleries, selectedId, onSelect }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-navy rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-navy text-white px-4 py-3 font-semibold text-sm text-left"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="p-3 bg-gray-50">
          {galleries.map((g) => (
            <button
              key={g.id}
              onClick={() => onSelect(g)}
              className={`w-full text-left text-sm py-2 px-3 hover:bg-teal hover:text-white rounded mb-1 flex justify-between items-center transition-colors border border-gray-200 ${
                selectedId === g.id ? 'bg-teal text-white' : 'text-gray-700'
              }`}
            >
              {g.name}
              <ChevronDown size={14} className="flex-shrink-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function AdminGalleriesSection({ galleries, selectedId, onSelect }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border border-teal rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-teal text-white px-4 py-3 font-semibold text-sm text-left"
      >
        Recent Galleries
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="p-3 bg-gray-50 space-y-1">
          {galleries.map((g) => (
            <button
              key={`admin-${g.id}`}
              onClick={() => onSelect(g)}
              className={`w-full text-left text-sm py-2 px-3 hover:bg-teal hover:text-white rounded flex justify-between items-center transition-colors border border-gray-200 ${
                selectedId === g.id ? 'bg-teal text-white' : 'text-gray-700'
              }`}
            >
              <span>{g.name}</span>
              <span className="text-xs opacity-70">{g.images?.length || 0} photos</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Gallery() {
  const [galleries, setGalleries] = useState([])
  const [adminGalleries, setAdminGalleries] = useState([])
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [photos, setPhotos] = useState([])       // normalized shape
  const [loadingPhotos, setLoadingPhotos] = useState(false)
  const [page, setPage] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    // Load admin galleries first — if any exist, auto-select the most recent
    fetch(`${API_BASE}/api/gallery/admin-galleries`)
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : []
        setAdminGalleries(list)
        if (list.length > 0) {
          loadAdminGallery(list[0])
        }
      })
      .catch(console.error)

    fetch(`${API_BASE}/api/gallery`)
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data)) return
        setGalleries(data)
      })
      .catch(console.error)
  }, [])

  function loadWPGallery(gallery) {
    setSelectedGallery(gallery)
    setPage(1)
    setLoadingPhotos(true)
    fetch(`${API_BASE}/api/gallery/${gallery.id}/images`)
      .then(r => r.json())
      .then(imgs => {
        setPhotos(Array.isArray(imgs) ? imgs.map(fromWP) : [])
        setLoadingPhotos(false)
      })
      .catch(() => setLoadingPhotos(false))
  }

  function loadAdminGallery(gallery) {
    setSelectedGallery({ ...gallery, _isAdmin: true })
    setPage(1)
    setPhotos((gallery.images || []).map(fromAdmin))
  }

  // Group WordPress galleries by academic year
  const grouped = galleries.reduce((acc, g) => {
    const yr = g.academic_year
    const key = yr ? `${yr}-${yr + 1}` : 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(g)
    return acc
  }, {})

  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === 'Other') return 1
    if (b === 'Other') return -1
    return b.localeCompare(a)
  })

  const currentYear = sortedYears[0]
  const olderYears = sortedYears.slice(1)

  // Pagination
  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE)
  const visiblePhotos = photos.slice((page - 1) * PHOTOS_PER_PAGE, page * PHOTOS_PER_PAGE)

  return (
    <div>
      <div className="text-center">
        <img src={ban111} />
      </div>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Selected gallery header */}
          {selectedGallery && (
            <div className="flex items-center justify-between bg-teal text-white px-4 py-2 rounded-t mb-0">
              <span className="font-semibold text-sm">{selectedGallery.name}</span>
              <ChevronDown size={16} />
            </div>
          )}

          {/* Photo grid */}
          <div className="bg-white p-4 shadow-md mb-6">
            {loadingPhotos ? (
              <div className="text-center py-10 text-gray-500 text-sm">Loading photos...</div>
            ) : visiblePhotos.length === 0 ? (
              <div className="text-center py-10 text-gray-400 text-sm">No photos available</div>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {visiblePhotos.map((photo, i) => (
                  <div
                    key={photo.id}
                    className="aspect-video bg-gray-100 rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setLightboxIndex((page - 1) * PHOTOS_PER_PAGE + i)}
                  >
                    <img
                      src={photo.thumbSrc}
                      alt={photo.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-navy', 'to-maroon')
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-7 h-7 rounded text-xs font-semibold transition-colors ${
                      p === page ? 'bg-maroon text-white' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Gallery list */}
          <div className="space-y-1">

            {/* Admin-uploaded galleries (shown first, open by default) */}
            {adminGalleries.length > 0 && (
              <AdminGalleriesSection
                galleries={adminGalleries}
                selectedId={selectedGallery?._isAdmin ? selectedGallery?.id : null}
                onSelect={loadAdminGallery}
              />
            )}

            {/* WordPress galleries – current year flat */}
            {currentYear && grouped[currentYear]?.map((g) => (
              <button
                key={g.id}
                onClick={() => loadWPGallery(g)}
                className={`w-full text-left text-sm py-2.5 px-4 flex justify-between items-center border border-gray-200 hover:bg-teal hover:text-white transition-colors rounded ${
                  !selectedGallery?._isAdmin && selectedGallery?.id === g.id
                    ? 'bg-teal text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                {g.name}
                <ChevronDown size={14} className="flex-shrink-0" />
              </button>
            ))}

            {/* Older years as accordions */}
            {olderYears.map((yr) => (
              <AccordionSection
                key={yr}
                title={`PHOTO GALLERY ${yr}`}
                galleries={grouped[yr] || []}
                selectedId={selectedGallery?._isAdmin ? null : selectedGallery?.id}
                onSelect={loadWPGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && photos.length > 0 && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % photos.length)}
        />
      )}
    </div>
  )
}
