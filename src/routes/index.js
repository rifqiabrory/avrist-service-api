const router = require("express").Router();
// Routes
const user = require("./user");

// Middleware: /api
router.use("/user", user);

module.exports = router;
