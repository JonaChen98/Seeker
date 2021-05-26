const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');





router.post('/signup', (req, res) => {
  console.log("POST body: ", req.body);
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login',
  passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/user_profile',
    failureRedirect: 'http://localhost:3000/login',
  }), 
  (req, res) => {
    // req.login(req.user, (err) => {
    //   if(err){
    //     console.log(err)
    //     return;
    //   }
    //   console.log(req.user)
    //   res.json(req.user)
    // })
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

// router.post('.login',
//   passport.authenticate('local', function(err,user,info){
//     if(user){
//       user.find({
//         where{
//           id: user.id
//         }
//       })
//     }
//   })
// )

 
router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;