const mongoose = require("mongoose");

const schema = new Schema({
  firNumber: {
    type: String,
    default: 0,
  },
  date: Date,
  prisonId: Number,
  districtName: String,
  name: String,
  address: String,
  stationName: String,
  crimeType: String,
  attachments: String,
});

const model = mongoose.model("jailRelease", schema);
module.exports = model;
