const express = require("express");
const router = express.Router();
const { CategoryController } = require("../controller/category");
const { validateStock } = require("../helpers/stock");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const {hitCache,clearCache}  = require("../middlewares/redis");

router.get("/", CategoryController.getCategory);
router.get("/:id_category", CategoryController.getCategoryDetail);
router.post("/add", protect, upload.single("photo"), CategoryController.insert);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", protect, CategoryController.deleteCategory);

module.exports = router;
