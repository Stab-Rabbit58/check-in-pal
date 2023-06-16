const express = require('express');
const todoController = require('../controller/todoController.js')
const router = express.Router();

router.post('/init', todoController.getTask, (req, res) => {
  res.status(200).json(res.locals.tasks)
})

router.post('/', todoController.addTask, (req, res) => {
  res.sendStatus(200);
});

router.patch('/', todoController.updateTask, (req, res) => {
  res.sendStatus(200);
});

router.delete('/', todoController.deleteTask, (req, res) => {
  res.sendStatus(200);
});



//export module
module.exports = router;