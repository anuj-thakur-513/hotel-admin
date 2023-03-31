const express = require('express')
const { getAllBookings } = require('../controllers/booking')

const bookingRouter = express.Router()

bookingRouter.get('/', getAllBookings)

module.exports = bookingRouter
