const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firNumber: {
    type: Number,
    default: 0,
  },
  name: String,
  address: String,
  wanted: Boolean,
  date: Date,
  crimeType: String,
  attachments: String,
  districtName: String,
  stationName: String,
});

const model = mongoose.model("notoriousCriminals", schema);

module.exports = model;
