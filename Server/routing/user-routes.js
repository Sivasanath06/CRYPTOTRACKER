var express = require('express');
var app = express();
const mongoose = require('mongoose');
const model = mongoose.model;
const hello = require('../controllers/user-controllers.js');
const userRouter = express.Router();
const model1 = require('../models/User');

const getAllUsers = hello.getAllUsers;
userRouter.get('/', async (req, res) => {
  let model1;
  try {
    users = await model1.find();
  } catch (err) {
    return console.log(err);
  }

  if (!model1) {
    return res.status(500).json({ message: 'Unexpected Error Occured' });
  }

  return res.status(200).json({ users });
});

module.exports = userRouter;
