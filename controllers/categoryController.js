const Category = require('../models/category');

exports.getCategories = async (req, res, next) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  };
  
  exports.addCategory = async (req, res, next) => {
    try {
      const {name} = req.body;
      const newCategory = new Category({name});
      const category = await newCategory.save();
      res.status(201).json(category);
    } catch (err) {ss
      next(err);
    }
  };

