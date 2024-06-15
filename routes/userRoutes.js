const express = require('express');
const { getUsers, getUserId, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserId);
router.post('/register', addUser);

module.exports = router;