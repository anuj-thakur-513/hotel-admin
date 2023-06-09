const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const roomsRouter = require('./routes/rooms')
const bookingRouter = require('./routes/booking')
const app = express()

// enable environment varibale in nodejs
require('dotenv').config()

// enable cors
app.use(cors())

const { DB_URL, PORT } = process.env

// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/api/v1/rooms', roomsRouter)
app.use('/api/v1/bookings', bookingRouter)


// Connect to the database
mongoose
  .connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    // Starting the server
    app.listen(PORT || 5000, () => {
      console.log(`Starting server at port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
