const TicketList = require('../models/ticketlist')

module.exports = {

    deleteTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    },
    // updateTask: (req, res) => {
    //     const id = req.params.id;
    //     TodoTask.findByIdAndUpdate(
    //         id,
    //         {
    //             title: req.body.title,
    //             content: req.body.content
    //         },
    //         err => {
    //             if (err) return res.status(500).send(err);
    //             res.redirect("/");
    //         });
    // }
}