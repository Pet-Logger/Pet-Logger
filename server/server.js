const path = require('path');
const express = require('express');
const models = require('./models/petLoggerModels');

const app = express();
const PORT = 3000;


if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.resolve(__dirname, '../src')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

async function createUserAndDog() {
  try {
    const newUser = await models.User.create({ name: 'Bongi', userName: 'petLoggerBongi', password: '12345' });
    const newDog = await models.Dog.create({ name: 'dog1', age: 23, breed: 'Spaniel', gender: 'F', users: [{ userId: '65ecbe30d6da6de8222431e2' }]});
    console.log({newUser}, {newDog});
  }
  catch (error) {

    console.log(error);
  }
}

async function findUserAndDog(){
  try {
    const foundDog = await models.Dog.find({name: 'dog1'});
    const foundUser = await models.User.find({name: 'Bongi'});
    console.log({foundDog}, {foundUser});
  } catch (error) {
    console.log(error);
  }
}
createUserAndDog();
findUserAndDog();


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}: http://localhost:${PORT}/`);
});

module.exports = app; 