const express = require('express');
const router = express.Router();
const { User, Events } = require('../models');
const passport = require('../middlewares/authentication')


// + user matches and user request
//  need to add prefreneces to user model



// router.get('http://localhost:8080/api/profile/testing'),(req,res) => {
//     var userid = req.user
//     console.log(userid)
// }

router.get('/getUserId', (req, res) => {
    console.log("hello")
    const id = 7;
    User.findByPk(id)
        .then(user => {
            if(!user) {
                console.log("no user")
                return res.sendStatus(404);
            }
            console.log(id)
            res.json(user)
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


module.exports = router;




