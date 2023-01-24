const express = require("express");
const router = express.Router();
const { UsersController } = require("../controller/users");
const { role, protect } = require("../middlewares/auth");
const upload = require("..//middlewares/upload");
const size = require("../middlewares/sizeUpload");

router.post("/register/:role", role, UsersController.register);
router.post("/login", UsersController.login);
router.post("/verification", UsersController.verificationOtp);
router.post("/forgot", UsersController.forgotPassword);
router.post("/forgot/:token", UsersController.resetPassword);
router.get("/profile", protect, UsersController.getUser);
router.put(
  "/edit-profile",
  protect,
  upload.single("photo"),
  UsersController.editProfile
);
router.put("/edit-photo", protect, size, UsersController.putPhoto);

module.exports = router;
