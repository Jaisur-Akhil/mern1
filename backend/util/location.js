/** @format */
const axios = require('axios');
const HttpError = require('../models/err');

const API_KEY = 'AIzaSyAIFs1UgqyCOAdjossm7Uyu3yYkhctmjDw';

const getCordsForAddress = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  const data = response.data;
  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError('could not find location', 422);
    throw error;
  } //   return { lat: 40.7484474, lng: -73.9871516 };
  const coordinates = data.results[0].geometry.location;
  return coordinates;
};

module.exports = getCordsForAddress;
//axios send a request front end to backend
// here we are using to send a req from out backend to another backend
