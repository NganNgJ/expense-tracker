const User = require('../models/user');
const PAGE_SIZE = 2

exports.getUsers = async (req, res, next) => {
  
    var page = req.query.page
    if (page) {
        page = parseInt(page)
        if(page < 1){
          page = 1
        }
        var skipNumber = (page-1) * PAGE_SIZE

        User.find({})
        .skip(skipNumber)
        .limit(PAGE_SIZE)
        .then(data=> {
          res.json(data)
        })
        .catch(err=>{
          res.status(500).json('Error')
        })

    } else {
      try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        next(err);
      }
    } 
};

exports.getUserId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id)
    
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }
    res.status(500).json(user);
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