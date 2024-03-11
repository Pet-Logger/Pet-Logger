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
petLoggerController.getDog = async (req, res, next) => {
	try {
		// fetch dog's info from database
		const dogs = await model.Dog.find();

		const dogsWithInfo = dogs.map(dog => {
			name: dog.Name,
			image: dog.image,
			id: dog.DogID
		});

		// send the response
		res.status(200).json(dogsWithInfo);

	} catch (err) {
		// handle errors
		return next({
      log: `Error in getDog middleware ${err}`,
      status: 500,
      message: `Error in getDog middleware`,
    });
	}
};

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
    // handle errors
    return next({
      log: `Error in addDog middleware ${err}`,
      status: 500,
      message: `Error in addDog middleware`,
    });
  }
};

// POST: middleware for adding a new user
petLoggerController.addUser = async (req, res, next) => {
  try {

    const { userId, name, username, password } = req.body;
    const newUser = await model.User.create({ userId, name, username, password });
    res.locals.newUser = newUser;
    return next();

  } catch (err) {
    // handle errors
    return next({
      log: `Error in addDog middleware ${err}`,
      status: 500,
      message: `Error in addDog middleware`,
    });
  }
};



module.exports = petLoggerController;
