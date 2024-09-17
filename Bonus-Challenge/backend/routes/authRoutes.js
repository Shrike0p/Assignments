const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const User = require('../models/User');

const router = express.Router();

// Validation schema using Zod
const signupSchema = z.object({
  nickname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6)
});

// Signup 
router.post('/signup', async (req, res) => {
  try {
    console.log('Incoming request body:', req.body); 
    signupSchema.parse(req.body); 
    const { nickname, email, password } = req.body;


    const existingUser = await User.findOne({ $or: [{ email }, { nickname }] });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ error: `The email "${email}" is already in use.` });
      }
      if (existingUser.nickname === nickname) {
        return res.status(400).json({ error: `The nickname "${nickname}" is already in use.` });
      }
    }
    const user = new User({ nickname, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    console.error('Error occurred during signup:', error); 
    res.status(400).json({ error: error.message });
  }
});


// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send('Invalid credentials.');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
