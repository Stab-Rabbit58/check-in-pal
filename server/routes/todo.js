const express = require('express');
const todoController = require('../controller/todoController.js')
const router = express.Router();


router.post('/', todoController.addTask, (req, res) => {
  res.sendStatus(200);
});

router.delete('/', todoController.deleteTask, (req, res) => {
  res.sendStatus(200);
});

router.get('/', todoController.getTask, (req, res) => {
  res.send(200).json(res.locals.tasks)
})

//export module
module.exports = router;