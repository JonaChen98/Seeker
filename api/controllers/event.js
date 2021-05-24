const express = require('express');
const router = express.Router();
const { Event } = require('../models');

// get ALL events
router.get('/', (req,res) => {
    const events = Event.findAll()
        .then(events => res.json(events));
    
});

// get an event by its ID
router.get('/:id', (req,res) => {
    const {id} = req.params;
    Event.findByPk(id)
        .then(event => {
            if (!event) {
                return res.sendStatus(404);
            }

            res.json(event);
        });
});

module.exports = router;