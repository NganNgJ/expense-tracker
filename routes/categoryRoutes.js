const express = require('express');
const { getCategories,getCategoryId, addCategory,updateCategory} = require('../controllers/categoryController');

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategoryId);
router.post('/', addCategory);
router.put('/:id', updateCategory);

module.exports = router;

