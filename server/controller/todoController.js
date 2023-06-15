const db = require('../models/userModel');

const todoController = {};


todoController.getTask = async (req, res, next) => {
  const text = "SELECT * FROM public.tasks WHERE user_id=$1"
  const { userID } = req.body;
  try {
    const response = await db.query(text, [userID]);
    console.log("GET for tasks successful");

    const entries = [];
    response.rows.forEach(entry => entries.push(entry.task));
    console.log('response', entries);
    res.locals.tasks = entries;
    return next();

  } catch (err) {
    console.error(err)
    return next({
      log: "Express error handler caught an error in the getTask middleware",
      status: 500,
      message: { err: "An error occurred in the getTask middleware" }
    })
  }
}

todoController.addTask = async (req, res, next) => {
  const { task, userID } = req.body;
  const text = `INSERT INTO public.tasks VALUES (DEFAULT, $1, $2)`
  console.log('entered middleware new task')
  try {
    await db.query(text, [task, userID]);
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
  const { task, oldVal, userID } = req.body;
  const text = `UPDATE public.tasks SET task=$1 WHERE tasks.task = $2 AND user_id = $3`
  console.log('entered middleware update task')
  try {
    await db.query(text, [task, oldVal, userID]);
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
  const { task, userID } = req.body;
  const text = `DELETE FROM public.tasks WHERE task=$1 AND user_id=$2`
  console.log('entered middleware delete task')
  try {
    await db.query(text, [task, userID]);
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

module.exports = todoController
