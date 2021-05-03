const express = require('express');
const router = express.Router();
const { Event } = require('../models');

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

// this endpoint is for adding events to the db
// input: name, time, description, location, lat, long
// check if an event name already exists
// router.post('/create_event', (req,res) => {
//     Event.create({
//         name: req.body.name,
//         time: req.body.time,
//         description: req.body.description,
//         location: req.body.location,
//         lat: req.body.lat,
//         long: req.body.long
//     })
//     .then(event => {
//         res.status(201).json(event);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

module.exports = router;