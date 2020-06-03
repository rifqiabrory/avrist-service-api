const router = require("express").Router();
// Controller
const UserController = require("../controller/UserController");

const corstConfig = {
  origin: "http://localhost:4200/",
  maxAge: 3600,
};
// Middleware: /api/user
router.get("/all", UserController.getAll);
router.post("/create", UserController.create);
router.post("/find", UserController.getUserBy);
router.post("/update", UserController.update);
router.post("/delete", UserController.remove);

module.exports = router;
