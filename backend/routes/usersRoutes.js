/** @format */

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getusers);

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.patch('/:uid');

router.delete('./:uid');

module.exports = router;
