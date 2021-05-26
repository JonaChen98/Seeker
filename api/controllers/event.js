// const express = require('express');
// const router = express.Router();
// const { Event } = require('../models');

// // get ALL events
// router.get('/', (req,res) => {
//     const events = Event.findAll()
//         .then(events => res.json(events));
    
// });

// // get an event by its ID
// router.get('/:id', (req,res) => {
//     const {id} = req.params;
//     Event.findByPk(id)
//         .then(event => {
//             if (!event) {
//                 return res.sendStatus(404);
//             }

//             res.json(event);
//         });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

const { Event, User } = require('../models');

// get all users attending an event with a specified ID
router.get('/', (req,res) => {
    Event.findAll({
        include: [{
            model: User,
            
        }],
        
    }).then(users => {
        if(!users)
            return res.sendStatus(404);

        res.json(users);
    })

});

// user is going to an event
router.post('/going', (req,res) => {
    const eventId = req.body.eventId;
    const userId = 7; // get from session

    Event.findByPk(eventId)
        .then(e => {
            User.findByPk(userId)
                .then(u => {
                    e.addUser(u);
                    res.status(201).end();
                })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

// user is not going to an event
router.post('/not_going', (req,res) => {
    const eventId = req.body.eventId;
    const userId = 7; // get from session

    Event.findByPk(eventId)
        .then(e => {
            User.findByPk(userId)
                .then(u => {
                    e.removeUser(u);
                    res.status(200).end();
                })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

module.exports = router;