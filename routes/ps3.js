const express = require('express');
const router = express.Router();

// GET request route
router.get('/', (req, res) => {
  const data = { string: 'GET request response' };
  res.render('index', { data });
});

// POST request route
router.post('/', (req, res) => {
  const originalString = req.body.string;
  const length = originalString.length;
  const data = { originalString, length };
  res.render('index', { data });
});

// GET request route with parameter
router.get('/names/:name', (req, res) => {
  const name = req.params.name;
  const data = { name };
  res.render('index', { data });
});

module.exports = router;