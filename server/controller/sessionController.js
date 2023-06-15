const db = require('../models/userModel');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = async (req, res, next) => {
  // write code here
  const { ssidCookie } = req.cookies;
  const text = 'SELECT * FROM public.sessions WHERE ssid = $1';
  const values = [ssidCookie];

  try {
    const result = await db.query(text, values);
    const session = result.rows[0];

    if (!session || !session.isValid()) {
      // Session not found or not valid, redirect to the signup page
      res.redirect('http://localhost:3000/signup');
    } else {
      // Session found and valid, allow access to the secret page
      next();
    }
  } catch (err) {
    // Handle error while querying the database
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

function generateSSID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 16;
  let ssid = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    ssid += characters.charAt(randomIndex);
  }

  return ssid;
}
/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = async (req, res, next) => {
  //write code here
  const text = 'INSERT INTO public.sessions (ssid) VALUES ($1) RETURNING *';
  const ssid = generateSSID(); // Assuming you have a function to generate a new ssid
  res.locals._id = ssid;r
  const values = [ssid];

  try {
    const result = await db.query(text, values);
    const session = result.rows[0];

    // Session created and saved successfully
    // You can set the ssid cookie here if needed
   //  res.cookie('ssid', session.ssid);
    next();
  } catch (err) {
    // Handle error while querying the database
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = sessionController;