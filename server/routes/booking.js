const express = require('express')
const {
  getAllBookings,
  getBookingById,
  postBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/booking')

const bookingRouter = express.Router()

bookingRouter.get('/', getAllBookings)
bookingRouter.get('/:id', getBookingById)
bookingRouter.post('/', postBooking)
bookingRouter.put('/:id', updateBooking)
bookingRouter.delete('/:id', deleteBooking)

module.exports = bookingRouter
