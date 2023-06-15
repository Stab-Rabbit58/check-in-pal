const db = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session')
const userController = {};


userController.newUser = async (req, res, next) => {
  const { username, password } = req.body;
  const text = `INSERT INTO public.users VALUES (DEFAULT, $1, $2)`
  console.log('entered middleware new user')
  try {

    const bcryptResponse = await bcrypt.hash(password, saltRounds);
    await db.query(text, [username, bcryptResponse]);
    console.log('New user created!')

    // get userid
    const queryStringID = `SELECT _id FROM public.users WHERE username = $1 AND password = $2;`
    const userID = await db.query(queryStringID, [username, bcryptResponse]);
    console.log('userID: ', userID.rows[0]._id);
    res.locals.userID = userID.rows[0]._id;

    return next();
  } catch (err) {
    console.error(err)
    return next({
      log: "Express error handler caught an error in the userController.newUser query for creating new user",
      status: 500,
      message: { error: "An error occurred in the userController.newUser query for creating new user" }
    })
  }
}

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password)
  console.log(req.body)
  const text = 'SELECT * FROM "public"."users" WHERE username = $1';
  try {
    const result = await db.query(text, [username]);
    if (result.rows.length > 0) {
      const bcyrptBool = await bcrypt.compare(password, result.rows[0].password);
      if (bcyrptBool) {

        // get userid
        const queryStringID = `SELECT _id FROM public.users WHERE username = $1;`
        const userID = await db.query(queryStringID, [username]);
        console.log('userID', userID);
        res.locals.userID = userID.rows[0]._id;

        return next();
      } else {
        return next({
          log: 'Invalid credentials',
          status: 401,
          message: { error: 'Wrong password' }
        })
      }
    } else {
      return next({
        log: 'User does not exist',
        status: 402,
        message: { error: 'User does not exist' }
      })
    }
  } catch (err) {
    console.error(err);
    return next({
      log: "Express error handler caught an error in the userController.verifyUser middleware",
      status: 500,
      message: { error: "An error occurred in the userController.verifyUser middleware" }
    });
  }
}

module.exports = userController