const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// enable environment varibale in nodejs
require('dotenv').config()

// enable cors
app.use(cors())

const { DB_URL, PORT } = process.env

// parse application/json
app.use(bodyParser.json())

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
