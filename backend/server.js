const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let items = [];

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Add new item
app.post('/items', (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ message: 'Item is required' });
  }

  items.push(item);
  res.json(items);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
