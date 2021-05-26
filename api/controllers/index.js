const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Load each controller
// const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const authController = require('./auth.js');
const eventController = require('./event.js');
const connectController = require('./connect.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller

// router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);
router.use('/auth', authController);
router.use('/event', eventController);
router.use('/connect', connectController);

module.exports = router;