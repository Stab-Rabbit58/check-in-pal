const db = require('../models/userModel');

const todoController = {};

todoController.addTask = async (req, res, next) => {
  const { task, key } = req.body;
  const text = `INSERT INTO public.tasks VALUES (DEFAULT, $1, DEFAULT)`
  console.log('entered middleware new task')
  try {
    await db.query(text, [task]);
    console.log('New task created!')
    return next();
  } catch (err) {
    console.error(err)
    return next({
      log: "Express error handler caught an error in the addTask middleware",
      status: 500,
      message: { err: "An error occurred in the addTask middleware" }
    })
  }
};

todoController.updateTask = async (req, res, next) => {
  const { task, oldVal } = req.body;
  const text = `UPDATE public.tasks SET task=$1 WHERE tasks.task = $2`
  console.log('entered middleware update task')
  try {
    await db.query(text, [task, oldVal]);
    console.log('Task updated!')
    return next();
  } catch (err) {
    console.error(err)
    return next({
      log: "Express error handler caught an error in the updateTask middleware",
      status: 500,
      message: { err: "An error occurred in the updateTask middleware" }
    })
  }
};

todoController.deleteTask = async (req, res, next) => {
  const { task } = req.body;
  const text = `DELETE FROM public.tasks WHERE task=$1`
  console.log('entered middleware delete task')
  try {
    await db.query(text, [task]);
    console.log('Task deleted!')
    return next();
  } catch (err) {
    console.error(err)
    return next({
      log: "Express error handler caught an error in the deleteTask middleware",
      status: 500,
      message: { err: "An error occurred in the deleteTask middleware" }
    })
  }
};

// todoController.getTask = async (req, res, next) => {
//   const text = "SELECT * FROM public.tasks"
//   try {
//     const response = await db.query(text)
//     console.log("GET for tasks successful")
//     res.locals.tasks = response.rows
//     return next();
//   } catch (err) {
//     console.error(err)
//     return next({
//       log: "Express error handler caught an error in the getTask middleware",
//       status: 500,
//       message: { err: "An error occurred in the getTask middleware" }
//     })
//   }
// }
module.exports = todoController
