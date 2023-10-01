const Model = require("../models/model");

const uploadCrime = async (req, res) => {
  try {
    const { firNumber, crimeCategory, description, date } = req.body;
    const file = req.file;
    const data = await Model.create({
      firNumber,
      crimeCategory,
      description,
      date,
      file,
    });
    res.status(200).json({
      result: data,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = { uploadCrime };
