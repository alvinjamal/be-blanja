const express = require("express");
const router = express.Router();
const ProductRouter = require("./products");
const UsersRouter = require("./users");

router.use("/products", ProductRouter).use("/users", UsersRouter);

module.exports = router;
