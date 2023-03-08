const express = require("express");
const router = express.Router();
const { CategoryController } = require("../controller/category");
const { validateStock } = require("../helpers/stock");
const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const sizePhoto = require("../middlewares/sizeUpload");

router.get("/", CategoryController.getCategory);
router.get("/:id_category", CategoryController.getCategoryDetail);
router.post("/add", protect, sizePhoto, CategoryController.insert);
router.put(
  "/update/:id_category",
  sizePhoto,
  CategoryController.updateCategory
);

router.delete("/:id_category", CategoryController.deleteCategory);

module.exports = router;
