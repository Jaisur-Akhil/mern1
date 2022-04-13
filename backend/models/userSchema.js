/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true , unique : true},
  places: { type: String, require: true, minlength: 3 },
  image: { type: String, require: true },
  password: { type: String, require: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Suser', userSchema);
//collection , model
/**
{
    "name" : "Abhijeet",
    "email" : "Abhi@micro.com",
    "password" : "bhai",
    "places" :"Pune"

    
    "name" : "Firdaus",
    "email" : "Fir@infy.com",
    "password" : "DosDos",
    "places" :"Pune"
    
} 

 * 
 * 
 * 
 */
