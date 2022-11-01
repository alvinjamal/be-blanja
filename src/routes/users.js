const express = require("express");
const router = express.Router();
const controllerUsers = require("../controller/users");
const { role } = require("../middlewares/auth");

router

  .post("/register/:role", role, controllerUsers.insert)
  .post("/login", controllerUsers.login);

module.exports = router;
