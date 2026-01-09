const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.use(errorHandler);

module.exports = app;

