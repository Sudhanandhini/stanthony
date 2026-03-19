import { useState, useEffect, useRef } from 'react'
import { Trash2, Plus, Upload, LogOut, ImagePlus, FolderOpen, ChevronDown, ChevronUp, Edit2, Check, X } from 'lucide-react'

const API = 'http://localhost:5000'

function token() { return localStorage.getItem('admin_token') }
function authHeader() { return { Authorization: 'Bearer ' + token() } }

// ── Login ────────────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')
      localStorage.setItem('admin_token', data.token)
      onLogin()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-500">St. Anthony's PU College</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy"
            placeholder="Username"
            value={form.username}
            onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            required
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy text-white rounded-lg py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ── Upload Modal ─────────────────────────────────────────────────────────────
function UploadModal({ gallery, onClose, onUploaded }) {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef()

  function pickFiles(e) {
    const picked = Array.from(e.target.files)
    if (!picked.length) return
    setFiles(picked.map(f => ({ file: f, preview: URL.createObjectURL(f) })))
    setError('')
  }

  function removeFile(idx) {
    setFiles(prev => prev.filter((_, i) => i !== idx))
  }

  async function handleUpload(e) {
    e.preventDefault()
    if (!files.length) return setError('Please select at least one image')
    setUploading(true); setError('')
    const fd = new FormData()
    files.forEach(({ file }) => fd.append('images', file))
    try {
      setProgress(`Uploading ${files.length} image${files.length > 1 ? 's' : ''}...`)
      const res = await fetch(`${API}/api/admin/galleries/${gallery.id}/images`, {
        method: 'POST',
        headers: authHeader(),
        body: fd,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      onUploaded(Array.isArray(data) ? data : [data])
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      setProgress('')
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="font-semibold text-gray-800">Upload Images — {gallery.name}</h2>
          <button onClick={onClose}><X size={18} className="text-gray-500" /></button>
        </div>
        <form onSubmit={handleUpload} className="p-6 space-y-4">
          {/* Drop area */}
          <div
            onClick={() => inputRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-navy transition-colors"
          >
            <div className="text-gray-400">
              <ImagePlus size={32} className="mx-auto mb-2" />
              <p className="text-sm font-medium">Click to select images</p>
              <p className="text-xs mt-1">JPG, PNG, WEBP – max 10MB each – up to 20 at once</p>
            </div>
            <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={pickFiles} />
          </div>

          {/* Previews grid */}
          {files.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 mb-2">{files.length} image{files.length > 1 ? 's' : ''} selected</p>
              <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                {files.map((f, i) => (
                  <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                    <img src={f.preview} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && <p className="text-red-500 text-xs">{error}</p>}
          {progress && <p className="text-teal text-xs">{progress}</p>}

          <div className="flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 border border-gray-300 rounded-lg py-2.5 text-sm hover:bg-gray-50">Cancel</button>
            <button
              type="submit"
              disabled={uploading || !files.length}
              className="flex-1 bg-teal text-white rounded-lg py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Upload size={15} />
              {uploading ? progress : `Upload ${files.length || ''} Image${files.length !== 1 ? 's' : ''}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ── Gallery Card ─────────────────────────────────────────────────────────────
function GalleryCard({ gallery, onDeleted, onImageUploaded, onImageDeleted }) {
  const [open, setOpen] = useState(false)
  const [images, setImages] = useState([])
  const [loadingImgs, setLoadingImgs] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [editName, setEditName] = useState(false)
  const [nameVal, setNameVal] = useState(gallery.name)
  const [deleting, setDeleting] = useState(false)

  async function loadImages() {
    setLoadingImgs(true)
    try {
      const res = await fetch(`${API}/api/admin/galleries/${gallery.id}/images`, { headers: authHeader() })
      setImages(await res.json())
    } finally { setLoadingImgs(false) }
  }

  function toggle() {
    if (!open) loadImages()
    setOpen(!open)
  }

  async function saveName() {
    if (!nameVal.trim()) return
    await fetch(`${API}/api/admin/galleries/${gallery.id}`, {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameVal }),
    })
    gallery.name = nameVal
    setEditName(false)
  }

  async function deleteGallery() {
    if (!confirm(`Delete gallery "${gallery.name}" and all its images?`)) return
    setDeleting(true)
    await fetch(`${API}/api/admin/galleries/${gallery.id}`, { method: 'DELETE', headers: authHeader() })
    onDeleted(gallery.id)
  }

  async function deleteImage(imgId) {
    if (!confirm('Delete this image?')) return
    await fetch(`${API}/api/admin/images/${imgId}`, { method: 'DELETE', headers: authHeader() })
    setImages(imgs => imgs.filter(i => i.id !== imgId))
    onImageDeleted()
  }

  function handleUploaded(newImgs) {
    setImages(imgs => [...newImgs, ...imgs])
    onImageUploaded(newImgs.length)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button onClick={toggle} className="flex-1 flex items-center gap-3 text-left min-w-0">
          <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
            <FolderOpen size={16} className="text-white" />
          </div>
          {editName ? (
            <input
              autoFocus
              value={nameVal}
              onChange={e => setNameVal(e.target.value)}
              onClick={e => e.stopPropagation()}
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-navy"
            />
          ) : (
            <span className="font-semibold text-gray-800 text-sm truncate">{gallery.name}</span>
          )}
          {open ? <ChevronUp size={15} className="flex-shrink-0 text-gray-400" /> : <ChevronDown size={15} className="flex-shrink-0 text-gray-400" />}
        </button>

        <div className="flex items-center gap-1 flex-shrink-0">
          {editName ? (
            <>
              <button onClick={saveName} className="p-1.5 text-green-600 hover:bg-green-50 rounded"><Check size={15} /></button>
              <button onClick={() => { setEditName(false); setNameVal(gallery.name) }} className="p-1.5 text-gray-400 hover:bg-gray-50 rounded"><X size={15} /></button>
            </>
          ) : (
            <button onClick={() => setEditName(true)} className="p-1.5 text-gray-400 hover:text-navy hover:bg-gray-50 rounded">
              <Edit2 size={14} />
            </button>
          )}
          <button
            onClick={() => { if (open) { } setShowUpload(true) }}
            className="p-1.5 text-teal hover:bg-teal hover:text-white rounded transition-colors"
            title="Upload image"
          >
            <ImagePlus size={15} />
          </button>
          <button
            onClick={deleteGallery}
            disabled={deleting}
            className="p-1.5 text-red-400 hover:bg-red-50 rounded"
            title="Delete gallery"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* Images grid */}
      {open && (
        <div className="border-t border-gray-100 p-4 bg-gray-50">
          {loadingImgs ? (
            <p className="text-center text-sm text-gray-400 py-4">Loading...</p>
          ) : images.length === 0 ? (
            <div className="text-center py-6 text-gray-400">
              <ImagePlus size={28} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm">No images yet</p>
              <button onClick={() => setShowUpload(true)} className="mt-2 text-xs text-teal underline">Upload first image</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {images.map(img => (
                <div key={img.id} className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`${API}${img.image_path}`}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => deleteImage(img.id)}
                      className="bg-red-500 text-white rounded-full p-1.5"
                    >
                      <Trash2 size={13} />
                    </button>
                    {img.title && <p className="text-white text-[10px] mt-1 px-1 text-center leading-tight">{img.title}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {showUpload && (
        <UploadModal
          gallery={gallery}
          onClose={() => setShowUpload(false)}
          onUploaded={handleUploaded}
        />
      )}
    </div>
  )
}

// ── Activities Tab ────────────────────────────────────────────────────────────
function ActivitiesTab() {
  const [activities, setActivities] = useState([])
  const [form, setForm] = useState({ title: '', content: '' })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [editId, setEditId] = useState(null)
  const [editForm, setEditForm] = useState({ title: '', content: '' })
  const fileRef = useRef()

  useEffect(() => { loadActivities() }, [])

  async function loadActivities() {
    const res = await fetch(`${API}/api/admin/activities`, { headers: authHeader() })
    const data = await res.json()
    setActivities(Array.isArray(data) ? data : [])
  }

  function pickImage(e) {
    const f = e.target.files[0]
    if (!f) return
    setImageFile(f)
    setImagePreview(URL.createObjectURL(f))
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!form.title.trim()) return setError('Title is required')
    setSaving(true); setError('')
    const fd = new FormData()
    fd.append('title', form.title)
    fd.append('content', form.content)
    if (imageFile) fd.append('image', imageFile)
    try {
      const res = await fetch(`${API}/api/admin/activities`, {
        method: 'POST', headers: authHeader(), body: fd,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setActivities(prev => [data, ...prev])
      setForm({ title: '', content: '' })
      setImageFile(null); setImagePreview(null)
    } catch (err) { setError(err.message) }
    finally { setSaving(false) }
  }

  async function saveEdit(id) {
    if (!editForm.title.trim()) return
    await fetch(`${API}/api/admin/activities/${id}`, {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm),
    })
    setActivities(prev => prev.map(a => a.id === id ? { ...a, ...editForm } : a))
    setEditId(null)
  }

  async function deleteActivity(id) {
    if (!confirm('Delete this activity?')) return
    await fetch(`${API}/api/admin/activities/${id}`, { method: 'DELETE', headers: authHeader() })
    setActivities(prev => prev.filter(a => a.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Create form */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">Add New Activity</h2>
        <form onSubmit={handleCreate} className="space-y-3">
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy"
            placeholder="Activity title *"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            required
          />
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy resize-none"
            placeholder="Description / paragraph..."
            rows={5}
            value={form.content}
            onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
          />
          {/* Image picker */}
          <div
            onClick={() => fileRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:border-navy transition-colors"
          >
            {imagePreview ? (
              <img src={imagePreview} alt="preview" className="max-h-40 mx-auto rounded object-contain" />
            ) : (
              <div className="text-gray-400">
                <ImagePlus size={28} className="mx-auto mb-1" />
                <p className="text-xs">Click to select image (one image)</p>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={pickImage} />
          </div>
          {imageFile && (
            <p className="text-xs text-gray-500">{imageFile.name}</p>
          )}
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="bg-navy text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
          >
            <Plus size={15} /> {saving ? 'Saving...' : 'Add Activity'}
          </button>
        </form>
      </div>

      {/* Activity list */}
      <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
        Activities ({activities.length})
      </h2>
      {activities.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400 text-sm">
          No activities yet.
        </div>
      ) : (
        <div className="space-y-3">
          {activities.map(act => (
            <div key={act.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex gap-4 p-4">
                {/* Image */}
                {act.image_path && (
                  <img
                    src={`${API}${act.image_path}`}
                    alt={act.title}
                    className="w-28 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {editId === act.id ? (
                    <div className="space-y-2">
                      <input
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-navy"
                        value={editForm.title}
                        onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))}
                      />
                      <textarea
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-navy resize-none"
                        rows={4}
                        value={editForm.content}
                        onChange={e => setEditForm(f => ({ ...f, content: e.target.value }))}
                      />
                      <div className="flex gap-2">
                        <button onClick={() => saveEdit(act.id)} className="px-3 py-1 bg-teal text-white rounded text-xs font-semibold flex items-center gap-1"><Check size={12} /> Save</button>
                        <button onClick={() => setEditId(null)} className="px-3 py-1 border border-gray-300 rounded text-xs">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="font-semibold text-sm text-gray-800 truncate">{act.title}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{act.content}</p>
                    </>
                  )}
                </div>
                {/* Actions */}
                {editId !== act.id && (
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    <button
                      onClick={() => { setEditId(act.id); setEditForm({ title: act.title, content: act.content }) }}
                      className="p-1.5 text-gray-400 hover:text-navy hover:bg-gray-50 rounded"
                    ><Edit2 size={14} /></button>
                    <button
                      onClick={() => deleteActivity(act.id)}
                      className="p-1.5 text-red-400 hover:bg-red-50 rounded"
                    ><Trash2 size={14} /></button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Bulletins Tab ─────────────────────────────────────────────────────────────
function BulletinsTab() {
  const currentAY = new Date().getMonth() >= 5
    ? new Date().getFullYear()
    : new Date().getFullYear() - 1

  const [bulletins, setBulletins] = useState([])
  const [form, setForm] = useState({ post_title: '', academic_year: String(currentAY) })
  const [pdfFile, setPdfFile] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [editId, setEditId] = useState(null)
  const [editForm, setEditForm] = useState({})
  const fileRef = useRef()

  useEffect(() => { loadBulletins() }, [])

  async function loadBulletins() {
    const res = await fetch(`${API}/api/admin/bulletins`, { headers: authHeader() })
    const data = await res.json()
    setBulletins(Array.isArray(data) ? data : [])
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!pdfFile) return setError('Please select a PDF file')
    setSaving(true); setError('')
    const fd = new FormData()
    fd.append('post_title', form.post_title)
    fd.append('academic_year', form.academic_year)
    fd.append('pdf', pdfFile)
    try {
      const res = await fetch(`${API}/api/admin/bulletins`, {
        method: 'POST',
        headers: authHeader(),
        body: fd,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setBulletins(prev => [data, ...prev])
      setForm({ post_title: '', academic_year: String(currentAY) })
      setPdfFile(null)
    } catch (err) { setError(err.message) }
    finally { setSaving(false) }
  }

  async function saveEdit(id) {
    await fetch(`${API}/api/admin/bulletins/${id}`, {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm),
    })
    setBulletins(prev => prev.map(b => b.ID === id ? { ...b, ...editForm, academic_year: parseInt(editForm.academic_year) } : b))
    setEditId(null)
  }

  async function deleteBulletin(id) {
    if (!confirm('Delete this bulletin?')) return
    await fetch(`${API}/api/admin/bulletins/${id}`, { method: 'DELETE', headers: authHeader() })
    setBulletins(prev => prev.filter(b => b.ID !== id))
  }

  // Group by academic year for display
  const grouped = bulletins.reduce((acc, b) => {
    const yr = b.academic_year
    const key = yr ? `${yr}-${yr + 1}` : 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(b)
    return acc
  }, {})
  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === 'Other') return 1
    if (b === 'Other') return -1
    return b.localeCompare(a)
  })

  return (
    <div className="space-y-6">
      {/* Create form */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">Add New Bulletin</h2>
        <form onSubmit={handleCreate} className="space-y-3">
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy"
            placeholder="Bulletin title *"
            value={form.post_title}
            onChange={e => setForm(f => ({ ...f, post_title: e.target.value }))}
            required
          />
          <div
            onClick={() => fileRef.current.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl px-4 py-4 text-center cursor-pointer hover:border-navy transition-colors"
          >
            {pdfFile ? (
              <p className="text-sm text-navy font-medium">{pdfFile.name}</p>
            ) : (
              <div className="text-gray-400">
                <p className="text-sm">Click to select PDF file</p>
                <p className="text-xs mt-1">Max 20MB</p>
              </div>
            )}
            <input ref={fileRef} type="file" accept="application/pdf" className="hidden" onChange={e => { setPdfFile(e.target.files[0] || null) }} />
          </div>
          <div className="flex gap-3 items-center">
            <label className="text-sm text-gray-600 whitespace-nowrap">Academic Year Start:</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-navy"
              value={form.academic_year}
              onChange={e => setForm(f => ({ ...f, academic_year: e.target.value }))}
            >
              {[2025, 2024, 2023, 2022, 2021, 2020].map(yr => (
                <option key={yr} value={yr}>{yr}-{yr + 1}</option>
              ))}
            </select>
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="bg-navy text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
          >
            <Plus size={15} /> {saving ? 'Saving...' : 'Add Bulletin'}
          </button>
        </form>
      </div>

      {/* Bulletin list grouped by year */}
      <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
        All Bulletins ({bulletins.length})
      </h2>
      {bulletins.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-400 text-sm">No bulletins yet.</div>
      ) : (
        <div className="space-y-4">
          {sortedYears.map(yr => (
            <div key={yr} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-navy text-white px-4 py-2 text-sm font-semibold">
                {yr === 'Other' ? 'Other' : `Academic Year ${yr}`}
              </div>
              <div className="divide-y divide-gray-100">
                {grouped[yr].map(b => (
                  <div key={b.ID} className="px-4 py-3 flex items-start gap-3">
                    <div className="w-10 h-12 bg-red-50 border border-red-200 rounded flex flex-col items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="bg-red-600 text-white text-[7px] font-bold w-full text-center py-0.5 rounded-t">PDF</div>
                      <span className="text-red-500 text-[18px] leading-none mt-1">↓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      {editId === b.ID ? (
                        <div className="space-y-2">
                          <input
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-navy"
                            value={editForm.post_title}
                            onChange={e => setEditForm(f => ({ ...f, post_title: e.target.value }))}
                          />
                          <p className="text-xs text-gray-400 px-1">PDF file cannot be changed (delete and re-add to replace)</p>
                          <select
                            className="border border-gray-300 rounded px-2 py-1.5 text-sm"
                            value={editForm.academic_year}
                            onChange={e => setEditForm(f => ({ ...f, academic_year: e.target.value }))}
                          >
                            {[2025, 2024, 2023, 2022, 2021, 2020].map(yr => (
                              <option key={yr} value={yr}>{yr}-{yr + 1}</option>
                            ))}
                          </select>
                          <div className="flex gap-2">
                            <button onClick={() => saveEdit(b.ID)} className="px-3 py-1 bg-teal text-white rounded text-xs font-semibold flex items-center gap-1"><Check size={12} /> Save</button>
                            <button onClick={() => setEditId(null)} className="px-3 py-1 border border-gray-300 rounded text-xs">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm font-medium text-gray-800 truncate">{b.post_title}</p>
                          <a href={b.pdf_url} target="_blank" rel="noopener noreferrer" className="text-xs text-teal underline truncate block">{b.pdf_url}</a>
                        </>
                      )}
                    </div>
                    {editId !== b.ID && (
                      <div className="flex gap-1 flex-shrink-0">
                        <button
                          onClick={() => { setEditId(b.ID); setEditForm({ post_title: b.post_title, pdf_url: b.pdf_url, academic_year: String(b.academic_year) }) }}
                          className="p-1.5 text-gray-400 hover:text-navy hover:bg-gray-50 rounded"
                        ><Edit2 size={14} /></button>
                        <button onClick={() => deleteBulletin(b.ID)} className="p-1.5 text-red-400 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Gallery Tab ───────────────────────────────────────────────────────────────
function GalleryTab() {
  const [galleries, setGalleries] = useState([])
  const [newName, setNewName]     = useState('')
  const [creating, setCreating]   = useState(false)
  const [totalImages, setTotalImages] = useState(0)

  useEffect(() => { loadGalleries() }, [])

  async function loadGalleries() {
    const res = await fetch(`${API}/api/admin/galleries`, { headers: authHeader() })
    const data = await res.json()
    setGalleries(Array.isArray(data) ? data : [])
  }

  async function createGallery(e) {
    e.preventDefault()
    if (!newName.trim()) return
    setCreating(true)
    try {
      const res = await fetch(`${API}/api/admin/galleries`, {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName }),
      })
      const data = await res.json()
      if (res.ok) { setGalleries(g => [data, ...g]); setNewName('') }
    } finally { setCreating(false) }
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-2xl font-bold text-navy">{galleries.length}</p>
          <p className="text-sm text-gray-500 mt-1">Total Galleries</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-2xl font-bold text-teal">{totalImages}</p>
          <p className="text-sm text-gray-500 mt-1">Total Images</p>
        </div>
      </div>

      {/* Create gallery */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Create New Gallery</h2>
        <form onSubmit={createGallery} className="flex gap-3">
          <input
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-navy"
            placeholder="Gallery name (e.g. Annual Sports Day 2026)"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={creating}
            className="bg-navy text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
          >
            <Plus size={16} /> Create
          </button>
        </form>
      </div>

      {/* Gallery list */}
      <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
        Galleries ({galleries.length})
      </h2>
      {galleries.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
          <FolderOpen size={36} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No galleries yet. Create one above.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {galleries.map(g => (
            <GalleryCard
              key={g.id}
              gallery={g}
              onDeleted={id => setGalleries(gs => gs.filter(x => x.id !== id))}
              onImageUploaded={(count = 1) => setTotalImages(n => n + count)}
              onImageDeleted={() => setTotalImages(n => n - 1)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function Dashboard({ onLogout }) {
  const [tab, setTab] = useState('gallery')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow">
        <div>
          <h1 className="text-lg font-bold">Admin Panel</h1>
          <p className="text-xs text-blue-200">St. Anthony's PU College</p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-sm bg-white bg-opacity-10 hover:bg-opacity-20 px-3 py-1.5 rounded-lg transition-colors"
        >
          <LogOut size={15} /> Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="max-w-5xl mx-auto flex gap-1">
          {[
            { key: 'gallery',    label: 'Photo Gallery' },
            { key: 'activities', label: 'Activities & Events' },
            { key: 'bulletins',  label: 'Anthonian Bulletin' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                tab === t.key
                  ? 'border-navy text-navy'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {tab === 'gallery'    && <GalleryTab />}
        {tab === 'activities' && <ActivitiesTab />}
        {tab === 'bulletins'  && <BulletinsTab />}
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('admin_token'))

  function logout() {
    localStorage.removeItem('admin_token')
    setLoggedIn(false)
  }

  return loggedIn
    ? <Dashboard onLogout={logout} />
    : <LoginPage onLogin={() => setLoggedIn(true)} />
}
