const ModelProduct = require("../model/products");
// const { createClient } = require("redis");
const { response } = require("../middlewares/common");
const { v4: uuidv4 } = require("uuid");

// const client = createClient(6379);

// client.on("error", (err) => console.log("Redis Client Error", err));

// client.connect();

const ProductController = {
  update: (req, res, next) => {
    ModelProduct.updateData(req.params.id, req.body);
    const port = process.env.PORT;
    const host = process.env.HOST;
    const photo = req.file.filename;
    const uri = `http://${host}:${port}/img/${photo}`;
    req.body.photo = uri;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
    req.body.category_id = parseInt(req.body.category_id);
    modelProduct
      .updateDataProduct(req.params.id_product, req.body)
      .then(() => resp(res, 200, true, "Update product success"))
      .catch((err) => response(res, 404, false, err, "Update product failed"));
  },
  delete: (req, res, next) => {
    ModelProduct.deleteData(req.params.id)
      .then((result) => response(res, 200, true, result, "Delete Data Success"))
      .catch((err) => response(res, 404, false, err, "Delete Data Fail"));
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
  getProductWithCategory: async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "name";
      const sort = req.query.sort || "ASC";
      const search = req.query.search || "";
      const result = await ModelProduct.selectDataWithCategory({
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
  getProductDetail: (req, res, next) => {
    ModelProduct.selectDatabyId(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "Get Data Success")
      )
      .catch((err) => response(res, 404, false, err, "Get Data Fail"));
  },
  insert: (req, res, next) => {
    const Port = process.env.PORT;
    const Host = process.env.HOST;
    const photo = req.file.filename;
    const uri = `http://${Host}:${Port}/img/${photo}`;
    const newId = uuidv4();
    req.body.photo = uri;
    req.body.name = req.body.name;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
    ModelProduct.insertData(req.body, newId)
      .then((result) => response(res, 200, true, result, "input data success"))
      .catch((err) => response(res, 404, false, err, "input data fail"));
  },
};

exports.ProductController = ProductController;
