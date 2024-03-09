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

async function createUser() {
  try {
    const newUser = await models.User.create({ name: 'Bongi', userName: 'petLoggerBongi', password: '12345' });
    console.log(newUser);
  }
  catch (error) {

    console.log(error);
  }
}

createUser();
// const user = await models.User.findOne({ name: 'Bongi' });
// console.log({ user });


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}: http://localhost:${PORT}/`);
})

module.exports = app; 