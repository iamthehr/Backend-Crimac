const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const Station = require('../models/stationsModel');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = expressAsyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const station = Station.findOne({ username });

    if(station & (await station.matchPassword(password))){
        res.json({
            _id: station._id,
            stationName: station.stationName,
            username: station.username,
            token: generateToken(station._id),
        });
    }
    else{
        res.status(401);
        throw new Error('Invalid username or password');
    }
}
);
module.exports = { authUser };