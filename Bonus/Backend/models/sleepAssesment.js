const mongoose = require('mongoose');

const sleepAssessmentSchema = new mongoose.Schema({
  sessionId: String,
  desiredChanges: [String],
  sleepDuration: String,
  bedtime: String,
  waketime: String,
  hoursOfSleep: Number,
  sleepEfficiency: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SleepAssessment', sleepAssessmentSchema);
