/** @format */

const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

router.get('/:pid', placeController.getPlaceById);
// http://localhost:2000/api/places/p1

router.get('/user/:uid', placeController.getUsersById);
//http://localhost:2000/api/places/user/Akhil

router.post('/', placeController.createPlace);

router.patch('/:pid', placeController.updatePlace);

router.delete('/:pid', placeController.deletePlace);

module.exports = router;

// if (!place) {
//     res.status(404).json({ message: 'could not find place for specific id' });
//   } else {
//     res.json({ place: place });
//   }
