/** @format */
const HttpError = require('../models/err');
const DUMMY = [
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

const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);
  const place = DUMMY.find((u) => {
    console.log(u.creator);
    return u.creator === userId;
  });
  if (!place) {
    return next(
      new HttpError('Could not find a user for provided user id', 404)
    );
  }

  res.json({ place });
};
exports.getPlaceById = getPlaceById;
exports.getUserById = getUserById;
