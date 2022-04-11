/** @format */
// const uuid = require('uuidv4');
const { v4: uuidv4, validate } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../models/err');
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

const getPlaceById = (req, res, next) => {
  console.log('Get Request - Application/json');
  const placeId = req.params.pid;
  const place = DUMMY.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    throw (error = new HttpError(
      'Could not find a place for provided id',
      404
    ));
  }
  res.json({ place });
};

const getUsersById = (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);
  const places = DUMMY.filter((u) => {
    console.log(u.creator);
    return u.creator === userId;
  });
  if (!places || places.length === 0) {
    return next(
      new HttpError('Could not find a users places for provided user id', 404)
    );
  }

  res.json({ places });
};

const createPlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError('Validation Error/ Invalid Input', 422);
  }
  const { title, description, coordinates, address, creator } = req.body;
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
};

const updatePlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError('Validation Error/ Invalid Input', 422);
  }
  const { title, description, coordinates, address, creator } = req.body;
  const placeId = req.params.pid;

  const updatePlace = { ...DUMMY.find((p) => p.id === placeId) };
  const placeIndex = DUMMY.findIndex((p) => p.id === placeId);
  updatePlace.title = title;
  updatePlace.description = description;
  updatePlace.coordinates = coordinates;
  updatePlace.address = address;
  updatePlace.creator = creator;

  DUMMY[placeIndex] = updatePlace;

  res.status(200).json({ place: updatePlace });
};
const deletePlace = (req, res, next) => {
  const placeId = req.params.pid; // keep the place if id donot match. if id do match . then remove the palce
  if (!DUMMY.find((p) => p.id === placeId)) {
    throw new HttpError('could not find a place to delete for Id', 404);
  }
  DUMMY = DUMMY.filter((p) => p.id !== placeId);
  res.status(200).json({ message: 'Deleted Place - ', placeId });
};

exports.getPlaceById = getPlaceById;
exports.getUsersById = getUsersById;
exports.createPlace = createPlace;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;
