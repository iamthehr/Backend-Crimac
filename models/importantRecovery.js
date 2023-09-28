const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firNumber: {
    type: String,
    default: 0,
  },
  date: Date,
  natureOfItem: String,
  quantity: Number,
  attachments: String,
  stationName: String,
});

const model = mongoose.model("importantRecovery", schema);

module.exports = model;
