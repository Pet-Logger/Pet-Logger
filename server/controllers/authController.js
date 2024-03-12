const { User } = require('../models/petLoggerModels.js');
const authController = {};

authController.addNewUser = (req, res, next) => {
  const { name, userName, password } = req.body;
  // console.log('This is the req.body ✨', req.body);
  if (!name || !userName || !password) {
    return next({
      log: 'authController.addNewUser did not receive all three required arguments (name, userName & password)',
      message: 'name userName and password are all required - try again',
      status: 400,
    });
  }
  User.create({ name, userName, password })
    .then((result) => {
      console.log('new user created');
      res.locals.createResult = result;
      return next();
    })
    .catch((error) => {
      // console.error(error.message);
      return next({
        log: 'error in authController.addNewUser: ' + error,
        message: 'server error when adding new user',
        status: 500,
      });
    });
};

authController.compareUser = (req, res, next) => {};

module.exports = authController;
