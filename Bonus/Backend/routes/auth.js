const express = require('express');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const User = require('../models/user');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key'; // Use a secure secret key in production

// Zod schema for input validation
const userSchema = z.object({
  nickname: z.string().min(3, 'Nickname must be at least 3 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const validation = userSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ errors: validation.error.errors });
    }

    const { nickname, password } = req.body;

    // Store the user without hashing (Note: Not secure, only for demo)
    const user = new User({ nickname, password });
    await user.save();

    res.json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const validation = userSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ errors: validation.error.errors });
    }

    const { nickname, password } = req.body;
    const user = await User.findOne({ nickname });

    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in user' });
  }
});

module.exports = router;
