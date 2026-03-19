const express = require('express')
const cors    = require('cors')
const pool    = require('./db')
require('dotenv').config()

const app  = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// GET all activities
app.get('/api/activities', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM activities ORDER BY sort_order ASC'
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET single activity by slug
app.get('/api/activities/:slug', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM activities WHERE slug = ?',
      [req.params.slug]
    )
    if (!rows.length) return res.status(404).json({ error: 'Not found' })
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET all bulletins grouped by academic year
app.get('/api/bulletins', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id AS ID, post_title, pdf_url, post_date, academic_year FROM bulletins ORDER BY post_date DESC'
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET all galleries grouped by academic year
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
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET images for a gallery
app.get('/api/gallery/:id/images', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, filename, image_url, thumb_url, alt FROM wp_bwg_image WHERE gallery_id = ? AND published = 1 ORDER BY `order` ASC',
      [req.params.id]
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
