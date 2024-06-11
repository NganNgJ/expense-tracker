const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};