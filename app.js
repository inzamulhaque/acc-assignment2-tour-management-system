const express = require("express");
const app = express();
const cors = require("cors");
const tourstRouter = require("./routes/v1/tours.router");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/tours", tourstRouter);

module.exports = app;
