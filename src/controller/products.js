const ModelProduct = require("../models/products");
const { response } = require("../middlewares/common");

const ProductController = {
  update: (req, res, next) => {
    const Port = process.env.PORT;
    const Host = process.env.HOST;
    const photo = req.file.filename;
    const uri = `http://${Host}:${Port}/img/${photo}`;
    req.body.photo = uri;
    req.body.name_product = req.body.name_product;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
    req.body.brand = req.body.brand;
    req.body.category_id = parseInt(req.body.category_id);
    ModelProduct.updateData(req.params.id_product, req.body)
      .then((result) => response(res, 200, true, result, "update data success"))
      .catch((err) => response(res, 404, false, err, "get data fail"));
  },
  delete: (req, res, next) => {
    ModelProduct.deleteData(req.params.id_product)
      .then((result) =>
        response(res, 200, true, req.params, "delete data success")
      )
      .catch((err) => response(res, 404, false, err, "get data fail"));
  },
  getProduct: async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "name";
      const sort = req.query.sort || "ASC";
      const search = req.query.search || "";
      const result = await ModelProduct.selectData({
        limit,
        offset,
        sort,
        sortby,
        search,
      });
      response(res, 200, true, result.rows, "Get Data Success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get Data Fail");
    }
  },

  getProductByCategory: async (req, res) => {
    try {
      const result = await ModelProduct.selectDataProductbyCategory(
        req.params.category_id
      );
      response(res, 200, true, result.rows, "Get Product by Category success");
    } catch (error) {
      console.log(error);
      response(res, 404, false, "Get Product by Category failed");
    }
  },

  getProductDetail: (req, res, next) => {
    ModelProduct.selectDatabyId(req.params.id_product)
      .then((result) =>
        response(res, 200, true, result.rows, "Get data success")
      )
      .catch((err) => response(res, 404, false, err, "Get data fail"));
  },

  insert: (req, res, next) => {
    const user_id = req.payload.id_user;
    const Port = process.env.PORT;
    const Host = process.env.HOST;
    const photo = req.file.filename;
    const uri = `http://${Host}:${Port}/img/${photo}`;
    req.body.photo = uri;
    req.body.name_product = req.body.name_product;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
    req.body.brand = req.body.brand;
    req.body.category_id = req.body.category_id;
    ModelProduct.insertData(user_id, req.body)
      .then((result) =>
        response(res, 200, true, req.body, "Insert data success")
      )
      .catch((err) => response(res, 404, false, err, "Insert data fail"));
  },
};

exports.ProductController = ProductController;
