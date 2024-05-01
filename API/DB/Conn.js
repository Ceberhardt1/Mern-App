const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/mern-app").then(()=>{
    console.log("Connected to DB!");
}).catch((e)=>{
    console.log("Could not connect to your DB!"+e)
})