// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
const config = require('./config.js');
const app = express();

// Connect to MongoDB


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/users', require('./routes/users'));
// Add other routes as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res) => {
  mongoose
  .connect("mongodb://atlas-sql-64624961d497a36282f2053b-f3orb.a.query.mongodb.net/main_base?ssl=true&authSource=admin")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
  console.log(`Server is running on port ${PORT}`);
});
