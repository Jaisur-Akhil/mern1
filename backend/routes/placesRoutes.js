/** @format */

const express = require('express');
const router = express.Router();

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

router.get('/:pid', (req, res, next) => {
  console.log('Get Request - Application/json');
  const placeId = req.params.pid;
  const place = DUMMY.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    res.status(404).json({ message: 'could not find place for specific id' });
  } else {
    res.json({ place: place });
  }
});
// http://localhost:2000/api/places/p1

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);
  const place = DUMMY.find((u) => {
    console.log(u.creator);
    return u.creator === userId;
  });
  if (!place) {
    res.status(404).json({ message: 'could not find place for specific User' });
  } else {
    res.json({ place: place });
  }
});
//http://localhost:2000/api/places/user/Akhil

module.exports = router;
