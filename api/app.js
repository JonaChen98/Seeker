const express = require('express');
const cors = require('cors')
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const passport = require('./middlewares/authentication');
const app=express().use('*', cors());
const PORT = process.env.PORT;
const seed = require('./seed');
const User = require('./models').User;
const cookieParser = require("cookie-parser");



// this lets us parse 'application/json' content in http requests

app.use(express.json());



// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//   next();
// });


// setup passport and session cookies
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true }));
  // app.use(require('cookie-parser'));
app.use(passport.initialize());
app.use(passport.session());

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findByPk(id)
//     .then((user) => {
//       if (!user) {
//         done(null, false);
//         return;
//       }

//       done(null, user);
//       return;
//     })
//     .catch(err => done(err, null));
// });

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
// db.sequelize.sync({ force: false });


// fill the events table in db
seed();

// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
