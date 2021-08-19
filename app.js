const express = require("express");
// const mongoose = require('mongoose');
require("./models/Records");

const cors = require("cors");

// Configuration keys
//const keys = require('./config/keys');

// router
const router = require("./routes/routes");

// create a express application
const app = express();

// It parses incoming requests with JSON payloads
app.use(express.json());

// handles CORS - if the request coming from browser.
app.use(cors());

// handle the router - incoming http request
router(app);

module.exports = app;
