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

const petLoggerController = {};

// GET: middleware for retreiving a dog data
petLoggerController.getDog = (req, res, next) => {};

// POST: middleware for adding a new dog
petLoggerController.addDog = (req, res, next) => {
  const { name, breed, age, gender } = req.body;
  next();
};

module.exports = petLoggerController;
