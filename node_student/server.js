const e = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const BodyParser = require('body-parser');
const path = require("path");
const studentRoute = require("./routes/studentRoutes");
// require("dotenv").config();

const port = 8000;


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((error)=>{
    console.log("MongoDB connection error : ",error);
})

app.use(BodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));

app.use("/", studentRoute);

app.get("/",async(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})