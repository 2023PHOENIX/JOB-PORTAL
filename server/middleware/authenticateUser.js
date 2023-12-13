const User = require('../model/User.js');
const jwt = require('jsonwebtoken');

// middleware to check wheather user is available or not


const isUserAvailable = async (req, res, next) => {

  try {

    if (req.headers.token) {
      const { email } = await jwt.verify(token, process.env.jwtPrivateKey);

      const user = await User.findOne({ email });
      req.user = user;
    }
    next();
  } catch (e) {
    next(e);
  }
}

const authenticateUser = async (req, res, next) => {
  const { token } = req.headers;
  try {
    const { email } = await jwt.verify(token, process.env.jwtPrivateKey);

    const user = await User.findOne({ email });
    req.user = user;
    if (user) {
      next();
    } else {
      res.status(401).json({
        message: "user not found. please re-login",
      });
    }
  } catch (e) {
    return next(e);
  }
};


module.exports = { authenticateUser, isUserAvailable };