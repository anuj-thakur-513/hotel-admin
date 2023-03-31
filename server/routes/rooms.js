const express = require('express')

const roomsRouter = express.Router()

const Room = require('../models/room')

roomsRouter.get('/', (req, res) => {
  res.status(200).send('Hello from roomsRouter')
})

module.exports = roomsRouter
