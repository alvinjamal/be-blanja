const express = require("express");
const router = express.Router();
const { statusController } = require("../controller/status");
const { validateStock } = require("../helpers/stock");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const {hitCache,clearCache}  = require("../middlewares/redis");

router.post(
  "/add",
  protect,
  upload.single("photo"),
  statusController.insertStatus
);

module.exports = router;
