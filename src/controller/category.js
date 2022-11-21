const modelCategory = require("../model/category");
const { response } = require("../middlewares/common");

const CategoryController = {
  update: (req, res) => {
    modelCategory
      .updateData(req.params, req.body)
      .then(() => resp(res, 200, true, "Update data success"))
      .catch((err) => response(res, 404, false, err, "Update data failed"));
  },

  delete: (req, res) => {
    modelCategory
      .deleteData(req.params.id)
      .then(() => resp(res, 200, true, "Delete data success"))
      .catch((err) => response(res, 404, false, err, "Delete data failed"));
  },

  getCategory: (req, res) => {
    modelCategory
      .selectData()
      .then((result) =>
        response(res, 200, true, result.rows, "Get data success")
      )
      .catch((err) => response(res, 404, false, err, "Get data failed"));
  },

  getCategoryDetail: (req, res) => {
    modelCategory
      .selectDataCategory(req.params)
      .then(() => response(res, 200, true.rows, "Get detail data success"))
      .catch((err) => response(res, 404, false, err, "Get detail data failed"));
  },

  insert: (req, res) => {
    modelCategory
      .insertData(req.body)
      .then(() => resp(res, 200, true, "Insert data success"))
      .catch((err) => response(res, 404, false, err, "Insert data failed"));
  },
};

exports.CategoryController = CategoryController;
