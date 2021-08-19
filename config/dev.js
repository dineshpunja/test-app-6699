require("dotenv").config();

module.exports = {
  // mongoURI: 'mongodb://localhost/test_app'

  // changed db name from: getircase-study to getir-case-study
  mongoURI: process.env.MONGO_URL,
};
