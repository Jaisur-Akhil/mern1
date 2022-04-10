/** @format */

const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/placesRoutes');

const app = express();
app.use('/api/places', placesRoutes);

app.listen(2000);
