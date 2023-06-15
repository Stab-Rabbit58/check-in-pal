const express = require('express');
const userController = require('../controller/userController.js')
const cookieController = require('../controller/cookieController.js')
const sessionController = require('../controller/sessionController')
const router = express.Router();


router.post('/', userController.verifyUser, (req, res) => {
  res.sendStatus(200)
});
router.get('/', (req, res) => {
  if (req.session.username) {
    res.send({loggedIn: true, user: req.session.username})
  } else {
    res.send({loggedIn: false})
  }
})

//export module
module.exports = router;