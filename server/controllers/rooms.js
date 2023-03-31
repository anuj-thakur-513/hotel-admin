const room = require('../models/room')

const getRooms = async (req, res) => {
  let rooms
  try {
    rooms = await room.find()
    res.status(200).json(rooms)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const postRoom = async (req, res) => {
  const { roomNumber, roomPrice, roomType } = req.body
  try {
    const newRoom = await room.create({ roomNumber, roomPrice, roomType })
    res.status(201).json(newRoom)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  postRoom,
  getRooms,
}
