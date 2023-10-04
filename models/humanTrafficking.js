const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firNumber: {
    type: Number,
    default: 0,
  },
  date: Date,
  number: Number,
  category: String,
  stationName: String,
  attachments: String,
});

const model = mongoose.model("humanTrafficking", schema);

module.exports = model;
