const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const SleepAssessment=require('../models/sleepAssesment')

const router = express.Router();

// Middleware to protect routes
router.use(verifyToken);

// Endpoint for submitting sleep goals
router.post('/session/:sessionId/sleep-goals', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { desiredChanges } = req.body;

    const sleepAssessment = new SleepAssessment({ sessionId, desiredChanges });
    await sleepAssessment.save();

    res.json({
      message: "Your goals are recorded. How long have you been struggling with your sleep?"
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit sleep goals' });
  }
});

module.exports = router;
