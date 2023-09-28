const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firNumber: {
    type: Number,
    default: 0,
  },
  date: Date,
  crimeType: String,
  nameOfDistrict: String,
  crimeLocation: String,
  attachments: String,
  stationName: String,
});

const model = mongoose.model("heinousCrime", schema);

module.exports = model;
