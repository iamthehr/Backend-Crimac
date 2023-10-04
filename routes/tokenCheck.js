const jwt = require("jsonwebtoken");

const tokenCheck = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(400).json({
      err: "invalid token",
    });
    return;
  }
};

module.exports = tokenCheck;
