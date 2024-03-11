//  DOG {
// 	DogID: integer,
// 	Name: string,
// 	Age: number,
// 	Breed: string
// 	gender: string,
// 	Users: [userID: integer]
// 	Posts: [{postType: string, details: string, date:date}]
// }

// GET REQUEST TO LOAD ALL DEPENDENTS. Info needed: name and image and id. Type for response : ARRAY of dog objects
// Method: GET
// Endpoint: /dog
// ControllerMethod:
// Response format:

// Method: POST
// Endpoint: localhost:3000/dog
// Body: { name, breed, age, gender }
// Controller Method: addDog
const model = require('../models/petLoggerModels');
const petLoggerController = {};

// GET: middleware for retreiving a dog data
petLoggerController.getDog = (req, res, next) => {};

// POST: middleware for adding a new dog
petLoggerController.addDog = async (req, res, next) => {
  try {
    // declare the constants we're going to use
    const { name, breed, age, gender } = req.body;

    // async connect to the mongo DB, and create a new dog
    const newDog = await model.Dog.create({ name, breed, age, gender });

    // save the dog object in res.locals as newDog
    res.locals.newDog = newDog;

    return next();
  } catch (err) {
    return next({
      log: `Error in getDog middleware ${err}`,
      status: 500,
      message: `Error in getDog middleware`,
    });
  }

  // handle errors
};

module.exports = petLoggerController;
