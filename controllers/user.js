const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const Station = require("../models/stationsModel");
const bcrypt = require("bcryptjs");

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = expressAsyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    //console.log(username + password);

    const station = await Station.findOne({ username });
    //console.log(station.password);

    if (station && password === station.password) {
      res.status(200).json({
        _id: station._id,
        stationName: station.stationName,
        username: station.username,
        token: generateToken(station._id),
        message: "success",
      });
    } else {
      res.status(400).json({
        error: "error",
      });
    }
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
});
module.exports = { authUser };
