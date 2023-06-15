const db = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session')
const userController = {};


userController.newUser = (req, res, next) => {
  const { username, password } = req.body;
  const text = `INSERT INTO public.users VALUES (DEFAULT, $1, $2)`
  console.log('entered middleware new user')
    bcrypt.hash(password, saltRounds)
      .then(response => {
        db.query(text, [username, response])
          .then(response => {
            console.log('New user created!')
            // res.locals.pass = response
            return next();
          })
          .catch(err => {
            return next({
              log: "Express error handler caught an error in the userController.newUser query for creating new user",
              status: 500,
              message: { error: "An error occurred in the userController.newUser query for creating new user" }
            })
          })

      }) .catch(err => {
        return next({
          log: "Express error handler caught an error in the userController.newUser middleware",
          status: 500,
          message: { error: "An error occurred in the userController.newUser middleware" }
        })
      })
}

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password)
  console.log(req.body)
  const text = 'SELECT * FROM "public"."users" WHERE username = $1';
    db.query(text, [username])
    .then(response => {
      console.log("query response", response)
      if (response.rows.length > 0) {
        bcrypt.compare(password, response.rows[0].password)
          .then(response2 => {
            console.log("bcrypt compare response", response2)
            if (response2) {
              // req.session.loggedIn = result;
              
              console.log("User verified!")
              return next();
            } else {
              return next({
                log: 'Invalid credentials',
                status: 401,
                message: { error: 'Wrong password' }
              })
            }
          })
      } else {
        return next({
          log: 'User does not exist',
          status: 402,
          message: { error: 'User does not exist' }
        })
      }
    }).catch(err => {
      return next({
        log: 'Express error handler caught userController.verifyUser middleware error',
        status: 400,
        message: { err: 'An error occurred in the userController.verifyUser middleware' }
      })
    })

}

module.exports = userController