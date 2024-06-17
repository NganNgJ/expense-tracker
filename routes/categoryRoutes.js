const express = require('express');
const { getCategories,getCategoryId, addCategory } = require('../controllers/categoryController');

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategoryId);
router.post('/', addCategory);

module.exports = router;

