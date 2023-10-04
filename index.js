const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const verifyToken = require("./config/verifyToken");
const tokenCheck = require("./routes/tokenCheck");
const searchRouter = require("./routes/searchRoutes");

const app = express();
app.use(cors());
dotenv.config();
// dotenv.config({ path: "./config/config.env" });
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use("/api/user", require("./routes/authRoutes"));
app.post("/api/verifyToken", verifyToken);
app.use("/api/search", tokenCheck, searchRouter);
app.use("/api/upload", tokenCheck, require("./routes/uploadRoutes"));

app.listen(3080, () => {
  console.log("Server is running on port 3080");
});
