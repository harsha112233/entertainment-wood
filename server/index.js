const express=require('express');
const connectDB = require('./config/connectDb');
const movieRoute = require("./routes/movieRoute");
const cors=require("cors");

const app = express();
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended:false }))


connectDB(process.env.MONGODB_URL)
const PORT=process.env.PORT || 8083



app.use("/movies", movieRoute);

app.listen(PORT,()=>{
    
    console.log(`Server is running on port ${PORT}`)
})