const router = require('express').Router();
const { User, Events } = require('../models');
// + user matches and user request
//  need to add prefreneces to user model


router.get('/userProfileinfo', (req, res) => {
    const { email } = req.params;
    User.findOne(email)
        .then(user => {
            if(!user) {
                return res.sendStatus(404);
            }
            
            res.json.user
        })

})


// if the events table has a association to users table does that add a new column to the events tables that is called UserID?
router.get('/userProfileEvents', (req, res) => {
    const{ email } = req.params;
    User.findOne(email)
        .then(user => {
            if(!user) {
                return res.sendStatus(404);
            }
            
        Events.findAll({
            where: {
                Userid: res.json.user.id
            }
        })
        .then(events => {
            if(!events) {
                return res.sendStatus(404);
            }

            res.json.events
        })   
        })
})




