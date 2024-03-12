const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const { Schema } = mongoose;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const uri =
  'mongodb+srv://brendafela:gur1pzDgsfkn5YcO@petloggercluster.afs6n5g.mongodb.net/?retryWrites=true&w=majority&appName=PetLoggerCluster';

mongoose
  .connect(uri, {
    // options for the connect method to parse the URI
    // sets the name of the DB that our collections are part of
    dbName: 'petLogger',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

//user Schema
const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  try {
    const user = this;

    if (!user.isModified('password')) return next();

    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
    return next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('user', userSchema);

//dogSchema
const dogSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  breed: { type: String },
  gender: { type: String },
  // users: [
  //   {
  //     userId: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'user',
  //     },
  //     userId: {
  //       type: Schema.Types.ObjectId,
  //       default: '65ecbe30d6da6de8222431e2'
  //     }
  //   },
  // ],
  users: {
    type: [Schema.Types.ObjectId],
    default: ['65ecbe30d6da6de8222431e2'],
  },
  posts: [
    {
      postType: String,
      details: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const Dog = mongoose.model('dog', dogSchema);

module.exports = {
  User,
  Dog,
};
