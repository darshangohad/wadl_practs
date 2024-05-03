// const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Music_route = require("./routes/music_route");

const path = require("path");
require("dotenv").config();

const PORT = 3000;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("MongoBD connected"))
.catch((error)=>console.log("MongoDB connection error :",error));


// This line sets the view engine for your Express application to EJS (Embedded JavaScript). This means that when you render views/templates, Express will use the EJS engine to process and render them. With this setup, you can create dynamic HTML pages by embedding JavaScript code directly into your HTML files.
app.set("view engine", "ejs");


// This line sets the directory where your application will look for view/template files
app.set("views",path.resolve('./views'));


// This line adds middleware to your Express application to parse incoming request bodies with URL-encoded payloads. When a form is submitted with method="post" and enctype="application/x-www-form-urlencoded", this middleware will parse the form data and make it available in req.body object of the corresponding route handler. The extended: false option means that the parsed data will be represented as a nested object or array, rather than a more complex object.
app.use(express.urlencoded({extended : false}));

// app.use(express.static(__dirname + "/views"));

app.use("/",Music_route);

app.get("/",async(req,res) =>{
    res.render("index");
})

app.listen(PORT,()=>{
    console.log(`Server started on PORT:  http://localhost:${PORT}`);
});