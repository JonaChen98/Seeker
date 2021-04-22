const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

/*
POST new user to database (register)
/api/register
req.body: email, first_name, last_name, gender, password
returns: json of data inserted to user table or error 
*/
router.post('/', (req,res) => {
    // **check if email is unique
    // ** hash password
    User.create({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        password: req.body.password
    })
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;