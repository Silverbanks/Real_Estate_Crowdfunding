cconst express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.post('/submit-form', (req, res) => {
  // Handle the POST request
  const data = req.body;
  console.log(data);
  res.status(200).send('Your interest has been recorded, and we will contact you shortly.');
});

// Error handling middleware
app.use((err, req, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));