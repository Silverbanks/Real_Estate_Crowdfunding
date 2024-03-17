const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.post('/your-endpoint', (req, res) => {
  // Handle the POST request
  const data = req.body;
  console.log(data);
  res.status(200).send('POST request received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));