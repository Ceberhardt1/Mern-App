const express = require("express");
const cors =require("cors");
require("./DB/Conn")

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

app.listen(8080, ()=>{
    console.log("Your API is running on PORT: " +PORT)
});