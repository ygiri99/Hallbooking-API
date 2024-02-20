const express = require("express");
const {rooms} = require("../Datas/datas");
const router = express.Router();


//Creating room for required seat, amenities, price
router.post('/creating',(req,res) => {
    let newRoom = req.body;
    let newRooms = [...rooms, newRoom];
    res.send({newRooms});
})

//Booking room with customerName,date and time with room id
router.post('/booking',(req,res) => {
    let bookingDetail = req.body;
    let requiredRoom = rooms.find(room => room.Room_ID === bookingDetail.Room_ID);
//Checking for room availability
    if(requiredRoom.Date === bookingDetail.Date){
        res.send("Room not available on reqiured date, try other date");
    }
    else{ BookedRoom = {...requiredRoom,...bookingDetail,isBooked:true};
    res.send({BookedRoom});
    }
})

//Listing rooms with Booked data
router.get('/booked/room',(req,res) => {
    let bookedRooms = rooms.filter(room => room.isBooked === true).map(room => {
        let Booked_Data = {};
        return {...Booked_Data,roomName:room.roomName,bookedStatus:room.bookingStatus,customerName:room.customerName,Date:room.Date,startTime:room.startTime,endTime:room.endTime};
    });
    res.send({"BookedRooms:roomName" :bookedRooms})
})

//Listing customers with Booked data
router.get('/booked/customer',(req,res) => {
    let bookedCustomers = rooms.filter(room => room.isBooked === true).map(room => {
        const { customerName,roomName,Date,startTime,endTime } = room;
        return {customerName,roomName,Date,startTime,endTime};
    });
    res.send({"BookedRooms:customerName" :bookedCustomers})
})

//Listing times a customer has booked
router.get('/booked/customer/:name',(req,res) => {
    const {name} = req.params;
    const roomsBooked = rooms.filter(room => room.customerName === name);
    res.send({"BookedRooms By:": name ,roomsBooked})
})


module.exports = router;