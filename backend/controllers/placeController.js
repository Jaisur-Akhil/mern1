/** @format */
// const uuid = require('uuidv4');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const getCordsForAddress = require('../util/location');
const HttpError = require('../models/err');
const mern = require('../models/placeSchema');
const Suser = require('../models/userSchema');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
//const { default: mongoose } = require('mongoose');

const getPlaceById = async (req, res, next) => {
  console.log('Get Request - Application/json');
  const placeId = req.params.pid;
  let place;

  try {
    place = await mern.findById(placeId);
  } catch (err) {
    const error = new HttpError('findById issue', 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError('Could not find a place for provided id', 404);
    return next(error);
  }
  res.json({ place: place.toObject({ getters: true }) }); // json to object , getter to remove _id to id
};
const getUsersById = async (req, res, next) => {
  const userId = req.params.uid;
  let places;

  try {
    places = await mern.find({ creator: userId });
  } catch (err) {
    const error = new HttpError(
      'Fetching places failed, please try again later',
      500
    );
    return next(error);
  }
  if (!places || places.length === 0) {
    return next(
      new HttpError('Could not find places for the provided user id.', 404)
    );
  }
  res.json({
    places: places.map((place) => place.toObject({ getters: true })),
  });
};
const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //console.log(errors);
    return next(new HttpError('Validation Error/ Invalid Input', 422));
  }
  const { title, description, address, creator } = req.body;
  let coordinates;
  try {
    coordinates = await getCordsForAddress(address);
    //console.log(coordinates);
  } catch (error) {
    // console.log(errors);
    return next(new HttpError('Validation Error/ Invalid Input', 422));
  }
  const createPlace = new mern({
    title,
    description,
    address,
    location: coordinates,
    image:
      'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHlvZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    creator,
  });
  let user;
  try {
    user = await Suser.findById(creator);
  } catch (err) {
    // console.log(err);
    return next(new HttpError('Validation Error/ Invalid Input', 422));
  }

  try {
    // await createPlace.save();
    //transaction - mutilple process. if any fails revert every`thing
    const sessn = await mongoose.startSession();
    sessn.startTransaction();
    await createPlace.save({ session: sessn });
    user.places.push(createPlace);
    await user.save({ session: sessn });
    await sessn.commitTransaction();
  } catch (err) {
    //console.log(err);
    const error = new HttpError('Creating place failed ', 500);
    return next(error);
  }
  res.status(201).json({ place: createPlace });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid; // keep the place if id donot match. if id do match . then remove the palce

  let place;
  try {
    place = mern.findById(placeId).populate('creator'); //if ref is tehre o both the relation
  } catch (err) {
    const error = new HttpError('no Id found to delete');
    return error;
  }
  if (!place) {
    const error = new HttpError('No id', 404);
    return error;
  }
  try {
    // const sessn = await mongoose.startSession();
    // sessn.startTransaction();
    // await place.remove({ session: sessn });
    // place.creator.places.pull(place);
    // await place.creator.save({ session: sessn });
    // await sessn.commitTransaction();

    const sessn = await mongoose.startSession();
    sessn.startTransaction();
    await place.remove({ session: sessn });
    place.creator.places.pull(place);
    await place.creator.save({ session: sessn });
    await sessn.commitTransaction();
  } catch (err) {
    const error = new HttpError('no Id found to delete');
    console.log(err);
    console.log(error);
    return next(error);
  }
  res.status(200).json({ message: 'Deleted following id  ', placeId });
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data', 422)
    );
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;
  let place;

  //   let place;
  try {
    place = await mern.findById(placeId);
  } catch (err) {
    const error = new HttpError('Update error', 500);
    return error;
  }
  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError('no Id found to delete');
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

exports.getPlaceById = getPlaceById;
exports.getUsersById = getUsersById;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;

/*
  const createPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY.push(createPlace);
  res.status(201).json({ place: createPlace });

   // places = DUMMY.filter((u) => {
    //   console.log(u.creator);
    //   return u.creator === userId;
    // });
*/
