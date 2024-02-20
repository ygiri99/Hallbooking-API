let rooms = [
    {
        Room_ID:1,
        roomName:'A-1',
        amenities:['Heater','TV','AC'],
        PricePerHour:1000,
        isBooked: true,
        bookingId:2325,
        bookingStatus:'checked',
        bookingDate:'12/2/2024',
        customerName:"Arun",
        Date: "15/4/2024",
        startTime: "10AM",
        endTime: "12PM"              
    },
    {
        Room_ID:2,
        roomName:'A-2',
        amenities:['Heater','AC'],
        PricePerHour:500, 
        isBooked: false
    },
    {
        Room_ID:3,
        roomName:'A-3',
        amenities:['Heater','TV','AC'],
        PricePerHour:900,
        isBooked: true,
        bookingId:7625,
        bookingStatus:'checked',
        bookingDate:'18/2/2024',
        customerName:"Arun",
        Date: "22/5/2024",
        startTime: "10AM",
        endTime: "12PM"              
    },
    {
        Room_ID:4,
        roomName:'A-4',
        amenities:['TV','AC'],
        PricePerHour:300,
        isBooked: true,
        bookingId:9845,
        bookingStatus:'checked',
        bookingDate:'18/1/2024',
        customerName:"Govindan",
        Date: "5/4/2024",
        startTime: "11AM",
        endTime: "3PM",
       
    }
];


module.exports = {rooms};