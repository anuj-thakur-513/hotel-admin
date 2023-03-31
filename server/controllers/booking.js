const booking = require('../models/booking')

const getAllBookings = async (req, res) => {
  let bookings
  try {
    bookings = await booking.find()
    res.status(200).json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllBookings,
}
