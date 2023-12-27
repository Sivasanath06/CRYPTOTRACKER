const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const userRouter = require('./routing/user-routes.js');

const cors = require('cors');

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
// app.use("/posts", postRouter);

// connections
mongoose.connect(
  `mongodb+srv://Sivasanath:${process.env.MONGODB_PASSWORD}@cluster0.c7bpxin.mongodb.net/?retryWrites=true&w=majority`
);
var db = mongoose.connection;
db.on('connected', () => {
  console.log('Database connnected succesfully');
});
db.on('error', () => {
  console.log('Database connection failed');
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
