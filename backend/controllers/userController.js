/** @format */

const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../models/err');
const Suser = require('../models/userSchema');


const getusers = async (req, res, next) => {
  let users;
  try {
    users = await Suser.find({}, '-password'); //  excludes pass
  } catch (err) {
    const error = new HttpError('Error at get - fetch user', 500);
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Validation Error/ Invalid Input', 422));
  }
  const { name, email, password } = req.body;
  let Exist;
  try {
    Exist = await Suser.findOne({ email: email });
  } catch (err) {
    const Error = new HttpError('Error at Signup exist ', 500);
    return next(Error);
  }

  if (Exist) {
    const Error = new HttpError('User Exists Already, please login now', 422);
    return next(Error);
  }

  // const Exist = DUMMY.find((u) => u.email === email);
  // if (Exist) {
  //   throw new HttpError('Could not create a user , as it already exist ', 422);
  // }
  const createUser = new Suser({
    name,
    email,
    password,
    places : [],
    image:
      'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGh1bWFuJTIwaGFwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  });

  try {
    await createUser.save();
  } catch (err) {
    const Error = new HttpError('Error at saving the user ', 422);
    return next(Error);
  }
  res.status(201).json({ user: createUser.toObject({ getters: true }) });
  //   id: uuidv4(),
  //   name, //name = name
  //   email,
  //   password,
  // };

  // DUMMY.push(createUser);
};
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let Exist;
  try {
    Exist = await Suser.findOne({ email: email });
  } catch (err) {
    const Error = new HttpError('Error at Login ', 500);
    return next(Error);
  }

  if (!Exist || Exist.password !== password) {
    const error = new HttpError(
      'Invalid Credentails , could not log you in .',
      422
    );
    return next(error);
  }

  res.json({ Message: 'Logged in' });
};


exports.getusers = getusers;
exports.signup = signup;
exports.login = login;
