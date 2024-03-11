//Importing express and creating our router
const express = require('express');
const router = express.Router();

// import our relevante controllers
const petLoggerController = require('../controllers/petLoggerController');

/* WHAT IS THIS FILE DOING?
  use the controllers based on what kind of a request is coming in
    define the endpoint and method
    run middleware
    send a response back
*/

// Method: POST
// Endpoint: localhost:3000/api/dog
// Body: { name, breed, age, gender }
// Controller Method: addDog
router.post('/dog', petLoggerController.addDog, (req, res) => {
  res.status(200).json(res.locals.newDog);
});

// POST to USER => create a new user
// router.post('/user')

// export this file
module.exports = router;
