const express=require('express');
const router=express.Router();

const requireLogin=require('../middelware/requireLogin')
const RoomController = require('../controllers/roomController')

router.get('/getRooms',requireLogin,RoomController.getRooms);
router.get('/getRoomsBulding/:roomID',RoomController.getRoomsBulding);
router.post('/getRoomByID/:roomID',requireLogin,RoomController.getRoomByID)
router.post('/addRoom',requireLogin,RoomController.addRoom)
router.post('/updateRoom/:roomID',requireLogin, RoomController.updateRoom)
router.post('/deleteRoom/:roomID',requireLogin,RoomController.deleteRoom)


module.exports = router

