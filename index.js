const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");

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

app.listen(3080, () => {
  console.log("Server is running on port 3080");
});
