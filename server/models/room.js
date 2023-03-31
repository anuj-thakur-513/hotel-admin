const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
  roomNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  roomPrice: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Room', roomSchema)
