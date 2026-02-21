const express = require('express');
const cors = require('cors');
const products = require('./src/data/products.json');

const app = express();
app.use(cors());

// API to serve shoe data
app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Node Server running on port ${PORT}`));