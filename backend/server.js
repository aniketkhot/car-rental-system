const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cars', require('./routes/carRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/rentals', require('./routes/rentalRoutes'));

app.get('/hello', (req, res) => {
  res.send("Hello World!");
});


// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working 1212✅" });
});

// Start server if not being imported (for testing support)
if (require.main === module) {
  connectDB();
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
