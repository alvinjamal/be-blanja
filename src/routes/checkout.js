const express = require("express");
const router = express.Router();
const { checkoutController } = require("../controller/checkout");
const { protect } = require("../middlewares/auth");
const { route } = require("./status");

router
  .post("/post", checkoutController.postCheckout)
  .put("/update", checkoutController.putStatus);
router
  .get("/all", checkoutController.getCheckout)
  .get("/do", checkoutController.getCheckoutDelivered)
  .get("/done", checkoutController.getCheckoutDone)
  .get("/:id_checkout", checkoutController.getCheckoutDetail)
  .put("/:id_checkout", checkoutController.putStatusId);

module.exports = router;
