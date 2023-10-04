const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firNumber: {
    type: Number,
    default: 0,
  },
  date: Date,
  stationName: String,
  numberOfPrisoners: Number,
  attachments: String,
});

const model = mongoose.model("jailBreaks", schema);
module.exports = model;
