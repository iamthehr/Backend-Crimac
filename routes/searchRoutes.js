const express = require("express");

const { firNumber, crimeCategory } = require("../controllers/search");

const router = express.Router();

router.post("/firNumber", firNumber);
router.post("/crimeCategory", crimeCategory);
//router.post("/keyword", keyword);

module.exports = router;
