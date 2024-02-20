const express = require("express");
const roomRouter = require("./Routes/apis");

const app = express();
app.use(express.json());
app.use(roomRouter);

const PORT = 4000;

app.listen(PORT,() => {
    console.log("Hall Booking API is running");
})