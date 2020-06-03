require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//db connection
const storage = require("./config/sequelize");
storage
  .authenticate()
  .then(() => console.log(`Database connected.`))
  .catch((err) => console.log(`Database connection failed at error:: ${err}`));

// Middlewares
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, X-Requested-With, Content-Type, Authorization"
  );
  next();
});

// Routes
const router = require("./src/routes/index.js");
app.use("/api", router);

// Error Handler - 404
app.use((req, res, next) => {
  if (res.status(404)) {
    res.json({
      success: false,
      status: 404,
      message: `The URL : ${req.url} doesn't exist.`,
    });
    next(err);
  }
});

// General Error
app.use(function (err, req, res, next) {
  if (err) {
    res.json({
      success: false,
      status: err.status,
      message: err.body,
      type: err.type,
    });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
