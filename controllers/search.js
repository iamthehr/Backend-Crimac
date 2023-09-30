const Model = require("../models/model");

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

const crimeCategory = async (req, res) => {
  const { crimeCategory, keyword, dateFrom, dateEnd } = req.body;
  if (crimeCategory && keyword && dateFrom && dateEnd) {
    if (crimeCategory === "All") {
      const data = await Model.find({
        $and: [
          { description: { $regex: keyword } },
          { date: { $gte: dateFrom } },
          { date: { $lte: dateEnd } },
        ],
      });
      res.status(200).json({
        result: data,
      });
    } else {
      const data = await Model.find({
        $and: [
          { crimeCategory },
          { description: { $regex: keyword } },
          { date: { $gte: dateFrom } },
          { date: { $lte: dateEnd } },
        ],
      });
      res.status(200).json({
        result: data,
      });
    }
  } else {
    res.status(400).json({
      error: "error",
    });
  }
};

module.exports = { firNumber, crimeCategory };
