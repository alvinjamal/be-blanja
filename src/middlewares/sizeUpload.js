const multer = require("multer");
const storage = require("../config/photo");

const sizeUpload = multer({
  storage: storage,
}).fields([
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "photo",
    maxCount: 1,
  },
]);

module.exports = sizeUpload;
