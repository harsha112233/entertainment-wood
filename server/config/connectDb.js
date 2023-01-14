const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

function connectDB(url) {
  return mongoose.connect(url, {
    
      autoIndex:true,
      useUnifiedTopology: true,
      useNewUrlParser: true
      
    })
    .then((res) => console.log("Connected to MongoDB"))
    .catch((err) =>console.error(err));
}

module.exports = connectDB;
