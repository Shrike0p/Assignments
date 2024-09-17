const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const authRoutes = require('./routes/auth');
const onboardingRoutes = require('./routes/onboarding');

const app = express();
app.use(express.json());

// Enable CORS for all requests
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Shrike:1234@cluster0.xrehbon.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', onboardingRoutes);

module.exports = app;
