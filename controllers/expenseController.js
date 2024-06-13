const User = require('../models/user');
const Category = require('../models/category');
const Expense = require('../models/expense');


//get all expense
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
//get specific expense
exports.getExpenseId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const expense = await Expense.findById(id)
                          .populate('user', 'username')
                          .populate('category', 'name');
    if (!expense) {
      return res.status(404).json({message: 'Expense not found'});
    }
    res.status(200).json(expense)
  } catch (err) {
    next(err);
  }
}


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
            expenseDate: new Date(expenseDate),
        });
        const expense = await newExpense.save();

        const populatedExpense = await Expense.findById(expense._id)
                                      .populate('user', 'username')
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
        { description, amount, user: userId, category: categoryId, expenseDate: new Date(expenseDate) },
        { new: true }
      );

      if (!updatedExpense) {
        return res.status(404).json({ message: 'Expense not found' });
      }

      const populatedExpense = await Expense.findById(updatedExpense._id)
                                    .populate('user', 'username')
                                    .populate('category', 'name');
  
      res.status(200).json(populatedExpense);
    } catch (err) {
      next(err);
    }
  };