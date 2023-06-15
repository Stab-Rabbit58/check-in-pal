const express = require('express');
const userController = require('../controller/userController.js')
const router = express.Router();


router.post('/', userController.newUser, (req, res) => {
  res.status(200).json({ userID: res.locals.userID });
});

//export module
module.exports = router;