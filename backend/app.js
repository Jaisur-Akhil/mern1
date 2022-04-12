/** @format */

const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/placesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const HttpError = require('./models/err');

const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);
app.use((req, res, next) => {
  const error = new HttpError('could not find this route', 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occured ' });
});
mongoose
  .connect(
    'mongodb+srv://akhil:akhil@mernmain.uwwu0.mongodb.net/backend?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(2000);
  })
  .catch((err) => {
    console.log(err);
  });

/*
-Project - Mern 
- Cluster name  - MernMain
Main  - backend 
user - akhil = password = akhil
mongodb+srv://akhil:akhil@mernmain.uwwu0.mongodb.net/backend?retryWrites=true&w=majority
database = backend
collection name =  mern



  db user id pass  akhil
cluster name  = Refresher
RefresherMongo
cluseter means database - create databse

  
  
  */
