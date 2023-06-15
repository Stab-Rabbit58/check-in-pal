const express = require('express');
const userController = require('../controller/userController.js')
const router = express.Router();


router.post('/', userController.newUser, (req, res) => {
  res.status(200).send(res.locals.pass);
});

//export module
module.exports = router;