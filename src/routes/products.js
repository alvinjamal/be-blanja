const express = require("express");
const router = express.Router();
const { ProductController } = require("../controller/products");
const { validateStock } = require("../helpers/stock");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const {hitCache,clearCache}  = require("../middlewares/redis");

router.post("/add", protect, upload.single("photo"), ProductController.insert);
router.get("/", ProductController.getProduct);
router.get("/:id_product", ProductController.getProductDetail);
router.get("/:category_id", ProductController.getProductByCategory);
router.put("/:id_product", ProductController.update);
router.delete("/:id_product", ProductController.delete);

module.exports = router;
