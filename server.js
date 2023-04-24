//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home")
const editRoutes = require("./routes/edit")
const authRoutes = require("./routes/auth")

//Use .env file in config folder
require('dotenv').config({path: './config/.env'})

// Passport config
require("./config/passport")(passport);

connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Logging
app.use(logger("dev"));

//Use flash messages for errors, info, ect...
app.use(flash());

//Set Routes
app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/edit', editRoutes)


//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));