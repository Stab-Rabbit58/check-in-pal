const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const PORT = 3000

const app = express();

// Handles cors, originally used no cors on front end, then took no cors off and added this to work
app.use(cors({
  origin: ["http://localhost:8080"],
  methods: ["GET","POST"],
  credentials: true,
}));
//handles parsing 
app.use(express.json());
// What this do tho?
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
  key: "id",
  secret: "something",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 24
  }
}))


// Require in all our routers
const loginRouter = require('./routes/login.js');
const signupRouter = require('./routes/signup.js')
const todoRouter = require('./routes/todo.js');
// const checkoutRouter = require ('./routes/checkout');


// Route handlers
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/todo', todoRouter);
// app.use('/checkout', checkoutRouter);



// Catch-all route error handler
app.use((req, res) => res.status(404).send('this is not the page you are looking for'))


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//server is listening on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});

//export module
module.exports = app;