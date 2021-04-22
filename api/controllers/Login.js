const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {

    const {email, password} = req.body;
    const loginInfo = await User.findOne({where: {email}}). catch ((err)=>{
        console.log("Error: ", err);
    });

    if(!loginInfo)
        return res.json( {message: "Email or password does not match!" })

    if(loginInfo.password !== password)
        return res.json({message: "Email or password does not match!"})

     // need to add authentication here   

});

module.exports = router;