const express = require("express");
const { uploadCrime } = require("../controllers/uploadCrime");
const { upload } = require("../controllers/uploader");

const router = express.Router();

router.post("/uploadCrime", upload.single("file"), uploadCrime);
