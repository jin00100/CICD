const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Self-hosted Runner! Version 1.0');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
