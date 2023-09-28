const express = require("express");
const Model = require("../models/model");

const router = express.Router();

const firNumber = async (req, res) => {
  try {
    const { firNumber } = req.body;
    const data = await Model.findOne({ firNumber });
    res.status(200).json({
      result: data,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

router.post("/firNumber", firNumber);
//router.post("/keyword", keyword);

module.exports = router;
