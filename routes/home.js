//Handles initial GET request for the homepage
//Handles POST method  request for creating new ticket

const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
const homeController = require('../controllers/home')
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', homeController.getIndex)
router.post('/new', homeController.createTicket)

//Authentication
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);


module.exports = router