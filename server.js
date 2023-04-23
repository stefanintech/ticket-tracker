//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home")
const editRoutes = require("./routes/edit")
require('dotenv').config({path: './config/.env'})

connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Logging
app.use(logger("dev"));

//Use flash messages for errors, info, ect...
app.use(flash());

//Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));