const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");
const { transactionController } = require("./../controller/transaction");

router.get("/", protect, transactionController.getTransactionAll);
router.post("/add", protect, transactionController.insertTransaction);
router.get("/:id_transaction", transactionController.getTransactionDetail);
router.put("/:id_transaction", transactionController.updateTransaction);
router.delete(
  "/:id_transaction",
  protect,
  transactionController.deleteTransaction
);

module.exports = router;
