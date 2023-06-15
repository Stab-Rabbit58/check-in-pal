const db = require('../models/userModel');

const userController = {};

userController.newUser = async (req, res, next) => {
  const { username, password } = req.body;
  const text = `INSERT INTO public.users VALUES (DEFAULT, $1, $2)`
  console.log('entered middleware new user')
  try {
    await db.query(text, [username, password]);
    console.log('New user created!')

    // get userid
    const queryStringID = `SELECT _id FROM public.users WHERE username = $1 AND password = $2;`
    const userID = await db.query(queryStringID, [username, password]);
    console.log('userID: ', userID.rows[0]._id);
    res.locals.userID = userID.rows[0]._id;

    return next();

  } catch (err) {
    console.error(err)
    return next({
      log: "Express error handler caught an error in the saveController.saveImage middleware",
      status: 500,
      message: { err: "An error occurred in the userController.newUser middleware" }
    })
  }
}

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password)
  console.log(req.body)
  const text = 'SELECT * FROM "public"."users" WHERE username = $1 and password = $2';
  try {
    const result = await db.query(text, [username, password]);
    if (result.rows.length > 0) {
      console.log('User verified!');

      // get userid
      const queryStringID = `SELECT _id FROM public.users WHERE username = $1 AND password = $2;`
      const userID = await db.query(queryStringID, [username, password]);
      console.log('userID: ', userID.rows[0]._id);
      res.locals.userID = userID.rows[0]._id;

      return next();
    } else {
      return next({
        log: 'Invalid credentials',
        status: 401,
        message: { error: 'Invalid username or password' }
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