const express = require('express')
const cors    = require('cors')
const path    = require('path')
const fs      = require('fs')
const multer  = require('multer')
const jwt     = require('jsonwebtoken')
const pool    = require('./db')
require('dotenv').config()

const app  = express()
const PORT = process.env.PORT || 5000
const JWT_SECRET   = process.env.JWT_SECRET   || 'stanthonys_secret'
const ADMIN_USER   = process.env.ADMIN_USER   || 'admin'
const ADMIN_PASS   = process.env.ADMIN_PASS   || 'admin123'

// Ensure uploads folder exists
const UPLOADS_DIR = path.join(__dirname, 'uploads')
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true })

// Multer – store uploads with original extension
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename:    (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e6)
    cb(null, unique + path.extname(file.originalname))
  },
})
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') cb(null, true)
    else cb(new Error('Only image or PDF files allowed'))
  },
})

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(UPLOADS_DIR))

// ── Auth middleware ──────────────────────────────────────────────────────────
function authRequired(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token' })
  try {
    req.admin = jwt.verify(token, JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// ── Admin login ──────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' })
    res.json({ token })
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

// ── Admin: gallery CRUD ──────────────────────────────────────────────────────
app.get('/api/admin/galleries', authRequired, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM admin_galleries ORDER BY created_at DESC'
    )
    res.json(rows)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.post('/api/admin/galleries', authRequired, async (req, res) => {
  const { name } = req.body
  if (!name?.trim()) return res.status(400).json({ error: 'Name required' })
  try {
    const [result] = await pool.query(
      'INSERT INTO admin_galleries (name) VALUES (?)', [name.trim()]
    )
    res.json({ id: result.insertId, name: name.trim() })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.put('/api/admin/galleries/:id', authRequired, async (req, res) => {
  const { name } = req.body
  if (!name?.trim()) return res.status(400).json({ error: 'Name required' })
  try {
    await pool.query('UPDATE admin_galleries SET name=? WHERE id=?', [name.trim(), req.params.id])
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.delete('/api/admin/galleries/:id', authRequired, async (req, res) => {
  try {
    const [imgs] = await pool.query(
      'SELECT image_path FROM admin_gallery_images WHERE gallery_id=?', [req.params.id]
    )
    imgs.forEach(img => {
      const p = path.join(UPLOADS_DIR, path.basename(img.image_path))
      if (fs.existsSync(p)) fs.unlinkSync(p)
    })
    await pool.query('DELETE FROM admin_gallery_images WHERE gallery_id=?', [req.params.id])
    await pool.query('DELETE FROM admin_galleries WHERE id=?', [req.params.id])
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Admin: image CRUD ────────────────────────────────────────────────────────
app.get('/api/admin/galleries/:id/images', authRequired, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM admin_gallery_images WHERE gallery_id=? ORDER BY created_at DESC',
      [req.params.id]
    )
    res.json(rows)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.post('/api/admin/galleries/:id/images', authRequired, upload.array('images', 20), async (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).json({ error: 'At least one image required' })
  try {
    const inserted = []
    for (const file of req.files) {
      const imagePath = '/uploads/' + file.filename
      const [result] = await pool.query(
        'INSERT INTO admin_gallery_images (gallery_id, title, image_path) VALUES (?,?,?)',
        [req.params.id, '', imagePath]
      )
      inserted.push({ id: result.insertId, gallery_id: req.params.id, title: '', image_path: imagePath })
    }
    res.json(inserted)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.delete('/api/admin/images/:id', authRequired, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT image_path FROM admin_gallery_images WHERE id=?', [req.params.id])
    if (rows.length) {
      const p = path.join(UPLOADS_DIR, path.basename(rows[0].image_path))
      if (fs.existsSync(p)) fs.unlinkSync(p)
    }
    await pool.query('DELETE FROM admin_gallery_images WHERE id=?', [req.params.id])
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Public: admin galleries (for Gallery page) ───────────────────────────────
app.get('/api/gallery/admin-galleries', async (req, res) => {
  try {
    const [galleries] = await pool.query(
      'SELECT * FROM admin_galleries ORDER BY created_at DESC'
    )
    for (const g of galleries) {
      const [imgs] = await pool.query(
        'SELECT * FROM admin_gallery_images WHERE gallery_id=? ORDER BY created_at DESC',
        [g.id]
      )
      g.images = imgs
    }
    res.json(galleries)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Activities ───────────────────────────────────────────────────────────────
app.get('/api/activities', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM activities ORDER BY sort_order ASC')
    res.json(rows)
  } catch (err) { res.status(500).json({ error: 'Database error' }) }
})

app.get('/api/activities/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM activities WHERE slug = ?', [req.params.slug])
    if (!rows.length) return res.status(404).json({ error: 'Not found' })
    res.json(rows[0])
  } catch (err) { res.status(500).json({ error: 'Database error' }) }
})

// ── Bulletins (public) ───────────────────────────────────────────────────────
app.get('/api/bulletins', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id AS ID, post_title, pdf_url, post_date, academic_year FROM bulletins ORDER BY post_date DESC'
    )
    res.json(rows)
  } catch (err) { res.status(500).json({ error: 'Database error' }) }
})

// ── Admin: bulletins CRUD ────────────────────────────────────────────────────
app.get('/api/admin/bulletins', authRequired, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id AS ID, post_title, pdf_url, post_date, academic_year FROM bulletins ORDER BY post_date DESC'
    )
    res.json(rows)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.post('/api/admin/bulletins', authRequired, upload.single('pdf'), async (req, res) => {
  const { post_title, academic_year } = req.body
  if (!post_title?.trim()) return res.status(400).json({ error: 'Title required' })
  if (!req.file)           return res.status(400).json({ error: 'PDF file required' })
  const pdf_url = '/uploads/' + req.file.filename
  const post_date = new Date().toISOString().slice(0, 10)
  const yr = parseInt(academic_year) || new Date().getFullYear()
  try {
    const [result] = await pool.query(
      'INSERT INTO bulletins (post_title, pdf_url, post_date, academic_year) VALUES (?,?,?,?)',
      [post_title.trim(), pdf_url, post_date, yr]
    )
    res.json({ ID: result.insertId, post_title: post_title.trim(), pdf_url, post_date, academic_year: yr })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.put('/api/admin/bulletins/:id', authRequired, async (req, res) => {
  const { post_title, pdf_url, academic_year } = req.body
  if (!post_title?.trim()) return res.status(400).json({ error: 'Title required' })
  if (!pdf_url?.trim())    return res.status(400).json({ error: 'PDF URL required' })
  try {
    await pool.query(
      'UPDATE bulletins SET post_title=?, pdf_url=?, academic_year=? WHERE id=?',
      [post_title.trim(), pdf_url.trim(), parseInt(academic_year) || 0, req.params.id]
    )
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.delete('/api/admin/bulletins/:id', authRequired, async (req, res) => {
  try {
    await pool.query('DELETE FROM bulletins WHERE id=?', [req.params.id])
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Gallery (WordPress) ──────────────────────────────────────────────────────
app.get('/api/gallery', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, name, slug, random_preview_image AS preview_image,
        IF(modified_date > 0,
          IF(MONTH(FROM_UNIXTIME(modified_date)) >= 6,
            YEAR(FROM_UNIXTIME(modified_date)),
            YEAR(FROM_UNIXTIME(modified_date)) - 1),
          NULL) AS academic_year
       FROM wp_bwg_gallery
       WHERE published = 1 AND modified_date > 0 AND id NOT IN (15, 94, 136, 139)
       ORDER BY id DESC`
    )
    res.json(rows)
  } catch (err) { res.status(500).json({ error: 'Database error' }) }
})

app.get('/api/gallery/:id/images', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, filename, image_url, thumb_url, alt FROM wp_bwg_image WHERE gallery_id = ? AND published = 1 ORDER BY `order` ASC',
      [req.params.id]
    )
    res.json(rows)
  } catch (err) { res.status(500).json({ error: 'Database error' }) }
})

// ── Admin: activities CRUD ────────────────────────────────────────────────────
app.get('/api/admin/activities', authRequired, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM admin_activities ORDER BY created_at DESC')
    res.json(rows)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.post('/api/admin/activities', authRequired, upload.single('image'), async (req, res) => {
  const { title, content } = req.body
  if (!title?.trim()) return res.status(400).json({ error: 'Title required' })
  const imagePath = req.file ? '/uploads/' + req.file.filename : ''
  try {
    const [result] = await pool.query(
      'INSERT INTO admin_activities (title, content, image_path) VALUES (?,?,?)',
      [title.trim(), content || '', imagePath]
    )
    res.json({ id: result.insertId, title: title.trim(), content: content || '', image_path: imagePath })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.put('/api/admin/activities/:id', authRequired, async (req, res) => {
  const { title, content } = req.body
  if (!title?.trim()) return res.status(400).json({ error: 'Title required' })
  try {
    await pool.query('UPDATE admin_activities SET title=?, content=? WHERE id=?',
      [title.trim(), content || '', req.params.id])
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.delete('/api/admin/activities/:id', authRequired, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT image_path FROM admin_activities WHERE id=?', [req.params.id])
    if (rows.length && rows[0].image_path) {
      const p = path.join(UPLOADS_DIR, path.basename(rows[0].image_path))
      if (fs.existsSync(p)) fs.unlinkSync(p)
    }
    await pool.query('DELETE FROM admin_activities WHERE id=?', [req.params.id])
    res.json({ success: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
})

// ── Public: admin activities ──────────────────────────────────────────────────
app.get('/api/public-activities', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM admin_activities ORDER BY created_at DESC')
    res.json(rows)
  } catch (err) { res.status(500).json({ error: err.message }) }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
