const express = require('express');
const router = express.Router();
const { Request } = require('../models');

// get all users attending an event with a specified ID
router.post('/', (req,res) => {
    const status = false;
    const eventId = req.body.eventId;
    const requestorId = 7; // get from session
    const requesteeId = req.body.requesteeId;

    Request.findAll({where: {eventId: eventId, requestorId: requestorId, requesteeId: requesteeId}})
        .then(r => {
            if (r.length === 0) {
                Request.create({status: status, eventId: eventId, requestorId: requestorId, requesteeId: requesteeId})
                .then(request => {
                    res.status(201).json(request);
                })
                .catch(err => {
                    console.log(err);
                    res.status(404).json(err);
                })
            }

            else res.status(400).json({msg: "request already exits"});
        })

});

router.post('/checkOldRequest', (req,res) => {
    const status = false;
    const eventId = req.body.eventId;
    const requestorId = 7; // get from session
    const requesteeId = req.body.requesteeId;

    Request.findAll({where: {eventId: eventId, requestorId: requestorId, requesteeId: requesteeId}})
        .then(r => {
            if (r.length === 0) {
               res.status(204).end();
            }

            else res.status(200).end();
        })

});

module.exports = router;