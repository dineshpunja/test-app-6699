const mongoose = require("mongoose");

const { Schema } = mongoose;

const recordsSchema = new Schema(
  {
    key: String,
    value: String,
    counts: [Number],
  },
  { timestamps: true }
);

mongoose.model("records", recordsSchema);
