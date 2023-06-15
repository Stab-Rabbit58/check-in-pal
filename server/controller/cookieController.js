const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const id = res.locals._id;
  res.cookie('ssid', id, { httpOnly: true });
  return next();
};

module.exports = cookieController;