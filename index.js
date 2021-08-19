const app = require("./app");

const mongoose = require("mongoose");

// Configuration keys
const keys = require("./config/keys");

// connection to mongodb
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));

// Server running in the below port.
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening in Port: ${port}`);
});
