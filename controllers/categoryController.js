const Category = require('../models/category');

exports.getCategories = async (req, res, next) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  };

//get specific category
exports.getCategoryId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({message: 'Category not found'});
    }
    res.status(200).json(category)
  } catch (err) {
    next(err);
  }
}
  
  exports.addCategory = async (req, res, next) => {
    try {
      const {name} = req.body;
      const newCategory = new Category({name});
      const category = await newCategory.save();
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  };


exports.updateCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
  
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
  
      if (!updatedCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.status(200).json(updatedCategory);
    } catch (err) {
      next(err);
    }
  };