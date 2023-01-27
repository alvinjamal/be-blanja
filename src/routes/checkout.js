const express = require("express");
const router = express.Router();
const { checkoutController } = require("../controller/checkout");
const { protect } = require("../middlewares/auth");
const { route } = require("./status");

router
  .post("/post", protect, checkoutController.postCheckout)
  .put("/update", protect, checkoutController.putStatus);
router
  .get("/all", protect, checkoutController.getCheckout)
  .get("/delivery", protect, checkoutController.getCheckoutDelivered)
  .get("/done", protect, checkoutController.getCheckoutDone)
  .get("/:id_checkout", protect, checkoutController.getCheckoutDetail)
  .put("/:id_checkout", protect, checkoutController.putStatusId);

module.exports = router;
