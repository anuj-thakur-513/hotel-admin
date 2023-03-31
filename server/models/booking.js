const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Booking', bookingSchema)
