const express = require('express');
const { getExpenses, addExpense, updateExpense } = require('../controllers/expenseController');

const router = express.Router();

router.get('/', getExpenses);

router.post('/', addExpense);

router.put('/:id', updateExpense);

module.exports = router;
