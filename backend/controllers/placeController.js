/** @format */
// const uuid = require('uuidv4');
const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const getCordsForAddress = require('../util/location');
const HttpError = require('../models/err');
const mern = require('../models/placeSchema');
let DUMMY = [
  {
    id: 'p1',
    title: 'Mumbai',
    description: 'marine drive bicycling mediation coding',
    location: {
      lng: 18.945634,
      lat: 72.821329,
    },
    creator: 'Akhil',
  },
  {
    id: 'p2',
    title: 'Mumbai',
    description: 'Juhu Friends evening trains coding ',
    location: {
      lng: 19.095464,
      lat: 72.825985,
    },
    creator: 'Arusha',
  },
];

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
    console.log(errors);
    return next(new HttpError('Validation Error/ Invalid Input', 422));
  }
  const { title, description, address, creator } = req.body;
  let coordinates;
  try {
    coordinates = await getCordsForAddress(address);
    console.log(coordinates);
  } catch (error) {
    return next(error);
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
  try {
    await createPlace.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError('Creating place failed ', 500);
    return next(error);
  }
  // DUMMY.push(createPlace);
  res.status(201).json({ mern: createPlace });
};
const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Validation Error/ Invalid Input', 422));
  }
  const { title, description, coordinates, address, creator } = req.body;
  const placeId = req.params.pid;

  let place;
  try {
    place = await mern.findById(placeId);
  } catch (err) {
    const error = new HttpError('Update error', 500);
    return next(error);
  }

  place.title = title;
  place.description = description;
  place.address = address;
  place.creator = creator;

  try {
    await place.save;
  } catch (err) {
    const error = new HttpError('Update error saving issue', 500);
    return next(error);
  }
  // const placeIndex = DUMMY.findIndex((p) => p.id === placeId);
  // updatePlace.title = title;
  // updatePlace.description = description;
  // updatePlace.coordinates = coordinates;
  // updatePlace.address = address;
  // updatePlace.creator = creator;

  // DUMMY[placeIndex] = updatePlace;

  res.status(200).json({ place: place.toObject({ getters: true }) });
};
const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid; // keep the place if id donot match. if id do match . then remove the palce

  let place;
  try {
    place = mern.findById(placeId);
  } catch (err) {
    const error = new HttpError('no Id found to delete');
    return error;
  }

  try {
    await place.remove();
  } catch (err) {
    const error = new HttpError('no Id found to delete');
    return next(error);
  }
  res.status(200).json({ message: 'Deleted following id  ', placeId });
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
