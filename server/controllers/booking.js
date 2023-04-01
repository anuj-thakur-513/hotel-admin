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

const getBookingById = async (req, res) => {
  let bookings
  try {
    bookings = await booking.findById(req.params.id)
    res.status(200).json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const postBooking = async (req, res) => {
  let bookings
  try {
    bookings = await booking.create(req.body)
    res.status(200).json(bookings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateBooking = async (req, res) => {
  const { email, roomNumber, roomType, startDate, endDate } = req.body
  if (!email || !roomNumber || !roomType || !startDate || !endDate) {
    res.status(400).json({ message: 'Please provide all required fields' })
  }

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        email,
        roomNumber,
        roomType,
        startDate,
        endDate,
      },
      { new: true }
    )
    res.status(200).json(updatedBooking)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteBooking = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id)
    res.json({ message: 'User deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllBookings,
  postBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
}
