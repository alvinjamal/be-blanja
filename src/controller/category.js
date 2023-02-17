const ModelCategory = require("../models/category");
const cloudinary = require("cloudinary").v2;
const { response } = require("../middlewares/common");
const { resp } = require("../middlewares/common");

const CategoryController = {
  updateCategory: async (req, res) => {
    try {
      const id_category = req.params.id_category;
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "Store.id",
      });

      const data = {
        name: req.body.name,
        photo: image.url,
      };

      await ModelCategory.updateCategory(id_category, data);
      response(res, 200, true, data, "update data success");
    } catch (error) {
      console.log(error);
      response(res, 500, false, "update data failed");
    }
  },
  deleteCategory: (req, res) => {
    try {
      ModelCategory.deleteCategory(req.params.id_category).then(() =>
        response(res, 200, true, "Delete Category success")
      );
    } catch (error) {
      console.log(error);
      response(res, 500, false, "Delete Category failed");
    }
  },

  getCategory: (_req, res) => {
    ModelCategory.selectCategory()
      .then((result) =>
        response(res, 200, true, result.rows, "Get category success")
      )
      .catch((err) => response(res, 500, false, err, "Get category failed"));
  },
  getCategoryDetail: (req, res) => {
    ModelCategory.selectDataCategorybyId(req.params.id_category)
      .then((result) =>
        response(res, 200, true, result.rows, "Get detail category success")
      )
      .catch((err) =>
        response(res, 500, false, err, "Get detail category failed")
      );
  },
  insert: async (req, res) => {
    try {
      const Port = process.env.PORT;
      const Host = process.env.HOST;
      const photo = req.file.filename;
      const uri = `http://${Host}:${Port}/img/${photo}`;
      req.body.photo = uri;
      req.body.name;
      await ModelCategory.insertCategory(req.body);
      return response(res, 200, true, req.body, "Insert Data Success");
    } catch (err) {
      console.log(err);
      return response(res, 500, false, err, "Insert Data Fail");
    }
  },
};
exports.CategoryController = CategoryController;
