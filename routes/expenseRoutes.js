const express = require('express');
const { getExpenses, getExpenseId, addExpense, updateExpense } = require('../controllers/expenseController');

const router = express.Router();

router.get('/', getExpenses);

router.get('/:id', getExpenseId);

router.post('/', addExpense);

router.put('/:id', updateExpense);

module.exports = router;
