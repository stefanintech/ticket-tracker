//This route will handle deleting tickets and updating the status of the ticket.

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')


router.get('/remove/:id', editController.deleteTicket)
router.get('/:id', editController.updateTicket)

module.exports = router