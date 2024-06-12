const User = require('../models/user');
const Category = require('../models/category');
const Expense = require('../models/expense');

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find()
            .populate('user', 'username')
            .populate('category', 'name');
        res.status(200).json(expenses);
    } catch (err) {
        next(err);
    }
};


exports.addExpense = async (req, res, next) => {
    try {
        const {description, amount, userId, categoryId, expenseDate} = req.body;
        const user = await User.findById(userId);
        const category = await Category.findById(categoryId);

        if (!user || !category) {
            return res.status(404).json({message: 'User or Category not found'});
        }
        const newExpense = new Expense({
            description,
            amount,
            user: userId,
            category: categoryId,
            expenseDate,
        });
        const expense = await newExpense.save();

        const populatedExpense = await expense.populate('user', 'username')
                                         .populate('category', 'name');
        res.status(201).json(populatedExpense);
    } catch (err) {
        next(err);
    }
}


exports.updateExpense = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { description, amount, userId, categoryId, expenseDate } = req.body;
  
      const user = await User.findById(userId);
      const category = await Category.findById(categoryId);
  
      if (!user || !category) {
        return res.status(404).json({ message: 'User or Category not found' });
      }
  
      const updatedExpense = await Expense.findByIdAndUpdate(
        id,
        { description, amount, user: userId, category: categoryId, expenseDate },
        { new: true }
      )
      .populate('user', 'username')
      .populate('category', 'name');
  
      if (!updatedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
  
      res.status(200).json(updatedExpense);
    } catch (err) {
      next(err);
    }
  };