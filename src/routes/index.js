const express = require("express");
const router = express.Router();
const ProductRouter = require("./products");
const UsersRouter = require("./users");
const CategoryRouter = require("./category");
const TransactionRouter = require("./transaction");
const CheckoutRouter = require("./checkout");
const StatusRouter = require("./status");

router.use("/products", ProductRouter);
router.use("/users", UsersRouter);
router.use("/category", CategoryRouter);
router.use("/transaction", TransactionRouter);
router.use("/checkout", CheckoutRouter);
router.use("/status", StatusRouter);

module.exports = router;
