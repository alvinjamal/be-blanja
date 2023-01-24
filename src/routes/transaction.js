const express = require("express");
const router = express.Router();
const { transactionController } = require("./../controller/transaction");

router.get("/", transactionController.getTransactionDetail);
router.get("/user", transactionController.getTransactionByUser);
router.post("/add", transactionController.insertTransaction);
router.put("/:id", transactionController.updateTransaction);
router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;
