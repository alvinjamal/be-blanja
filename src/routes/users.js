const express = require("express");
const router = express.Router();
const { UsersController } = require("../controller/users");
const { role, protect } = require("../middlewares/auth");
const upload = require("..//middlewares/upload");
const sizePhoto = require("../middlewares/sizeUpload");

router.post("/login", UsersController.login);
router.post("/verification", UsersController.verificationOtp);
router.post("/forgot", UsersController.forgotPassword);
router.get("/all", UsersController.getAll);
router.get("/user", protect, UsersController.getUser);
router.put(
  "/profile",
  protect,
  upload.single("photo"),
  UsersController.editProfile
);
router.put(
  "/seller",
  protect,
  upload.single("photo"),
  UsersController.editProfileSeller
);
router.put(
  "/edit",
  protect,
  sizePhoto,
  UsersController.putPhoto
  // function (req, res) {
  //   res.header(
  //     "Access-Control-Allow-Origin",
  //     "https://blanja-alvinjamal.netlify.app"
  //   );
  //   res.header("Access-Control-Allow-Credentials", true);
  // }
);
router.post("/register/:role", role, UsersController.register);
router.post("/forgot/:token", UsersController.resetPassword);

router.delete("/delete/:id_user", UsersController.delete);

module.exports = router;
