const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Trip', tripSchema)
