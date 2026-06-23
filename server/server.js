const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('World Cup Community Space API is running ⚽');
});

app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/events/:location', async (req, res) => {
  try {
    const { location } = req.params;

    const result = await pool.query(
      'SELECT * FROM events WHERE LOWER(location) = LOWER($1) ORDER BY date ASC',
      [location]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events by location:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});