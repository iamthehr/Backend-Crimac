const express = require("express");
const {authUser} = require('../controllers/authController');
const router = express.Router();


router.route('/login').post(authUser);
