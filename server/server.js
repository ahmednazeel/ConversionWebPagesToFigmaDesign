require("dotenv").config({path:__dirname+'\\.env'});
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const conversionRoutes = require('./routes/conversionRoutes');


app.use(express.json());
app.use(cors())

// // Make Routes on this slash
app.use("/api",conversionRoutes)



// Open The Server
app.listen(process.env._PORT,()=>{
    console.log('the server is running on post')
})
  