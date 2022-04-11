/** @format */

const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../models/err');
let DUMMY = [
  {
    id: '1',
    name: 'Akhil',
    email: 'akhil@ubi.com',
    password: 'akhil',
  },
  { id: '2', name: 'Arusha', email: 'arusha@ubi.com', password: 'arusha' },
];

const getusers = (req, res, next) => {
  res.json({ users: DUMMY });
};
const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError('Validation Error/ Invalid Input', 422);
  }
  const { name, email, password } = req.body;
  const Exist = DUMMY.find((u) => u.email === email);
  if (Exist) {
    throw new HttpError('Could not create a user , as it already exist ', 422);
  }
  const createUser = {
    id: uuidv4(),
    name, //name = name
    email,
    password,
  };

  DUMMY.push(createUser);
  res.status(201).json({ user: createUser });
};
const login = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('User not found/ Auth failed', 401);
  }

  res.json({ Message: 'Logged in' });
};

exports.getusers = getusers;
exports.signup = signup;
exports.login = login;
