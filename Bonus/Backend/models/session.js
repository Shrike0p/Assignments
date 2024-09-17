const mongoose=require("mongoose")

const sessionSchema = new mongoose.Schema({
  sessionId: String,
  nickname: String,
  isOver13: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
