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
  subject: String,
  assistance: String,
  category: String,
  natureOfItem: String,
  quantity: Number,
  numberOfPrisoners: Number,
  prisonId: Number,
  name: String,
  address: String,
  wanted: Boolean,
  description: String,
  file: String,
});

const model = mongoose.model("model", schema);
module.exports = model;
