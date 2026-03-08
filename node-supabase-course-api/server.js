require("dotenv").config();
const express = require("express");
const cors = require("cors");


const courseRoutes = require("./routes/courses");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});