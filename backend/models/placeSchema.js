/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, require: true['Please insert title'] },
  description: { type: String, required: true['please insert Desc'] },
  image: { type: String, required: true['Please insert image'] },
  address: { type: String, required: true['Please insert address'] },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true['please insert creator'],
    ref: 'Suser',
  },
});

module.exports = mongoose.model('mern', placeSchema);
//name of module , schema
