require("dotenv").config();
module.exports = {
  // changed db name from: getircase-study to getir-case-study
  mongoURI: process.env.MONGO_URL,
};
