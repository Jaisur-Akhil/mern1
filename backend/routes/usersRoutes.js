/** @format */

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getusers);

router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 4 }),
  ],
  UserController.signup
);

router.post('/login', UserController.login);

router.patch('/:uid');

router.delete('./:uid');

module.exports = router;
