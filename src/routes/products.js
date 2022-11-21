const express = require("express");
const router = express.Router();
const { ProductController } = require("../controller/products");
const { validateStock } = require("../helpers/stock");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const {hitCache,clearCache}  = require("../middlewares/redis");

router.get("/", ProductController.getProduct);
router.get("/category", ProductController.getProductWithCategory);
router.get("/:id", ProductController.getProductDetail);
router.post("/", upload.single("photo"), ProductController.insert);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

module.exports = router;
