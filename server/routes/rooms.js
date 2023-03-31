const express = require('express')
const { postRoom, getRooms } = require('../controllers/rooms')

const roomsRouter = express.Router()

const Room = require('../models/room')

roomsRouter.get('/', getRooms)

roomsRouter.post('/', postRoom)

module.exports = roomsRouter
