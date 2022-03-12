// modules
const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require ('dotenv').config ();

// db setup
mongoose.connect (process.env.MONGO_URI);
const connection = mongoose.connection;
connection.once ('open', () => console.log ('DB is ON!'));

// server setup
const app = express ();

// server middlewares
app.use (express.json ());
app.use (cors ());
app.use ('/api/courses', require ('./routes/coursesRoute'));

// server configuration
const port = process.env.PORT || 5000;
app.listen (port, () =>
  console.log (`The server is successfully running on port: ${port}`)
);
