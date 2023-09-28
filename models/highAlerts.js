const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firNumber: {
    type: Number,
    default: 0,
  },
  subject: String,
  assistance: String,
  stationName: String,
  attachments: String,
});

const model = mongoose.model("highAlerts", schema);

module.exports = model;
