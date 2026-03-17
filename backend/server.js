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

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
