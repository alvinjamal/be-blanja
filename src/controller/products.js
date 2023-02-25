const ModelProduct = require("../models/products");
const { response } = require("../middlewares/common");
const { cloudinary } = require("../config/photo");

const ProductController = {
  getProduct: async (req, res, next) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "name_product";
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
      response(res, 500, false, err, "Get Data Fail");
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
      response(res, 500, false, "Get Product by Category failed");
    }
  },

  getProductDetail: (req, res, next) => {
    ModelProduct.selectDatabyId(req.params.id_product)
      .then((result) =>
        response(res, 200, true, result.rows, "Get data success")
      )
      .catch((err) => response(res, 500, false, err, "Get data fail"));
  },

  insert: async (req, res, next) => {
    // const { name_product, price, stock, brand, category_id } = req.body;
    // // const Port = process.env.PORT;
    // // const Host = process.env.HOST;
    // // const photo = req.file.filename;
    // // const uri = `http://${Host}:${Port}/img/${photo}`;
    // const image = await cloudinary.uploader.upload(req.file.path, {
    //   folder: "Store.id",
    // });
    // const data = {
    //   name_product,
    //   price,
    //   stock,
    //   brand,
    //   photo: image.url,
    //   category_id,
    // };

    const user_id = req.payload.id_user;
    req.body.name_product = req.body.name_product;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
    req.body.brand = req.body.brand;
    req.body.category_id = parseInt(req.body.category_id);
    const {
      photo: [photo],
    } = req.files;
    req.body.photo = photo.path;
    ModelProduct.insertData(user_id, req.body)
      .then((result) =>
        response(res, 200, true, req.body, "Insert data success")
      )
      .catch((err) => response(res, 500, false, err, "Insert data fail"));
  },

  update: async (req, res) => {
    try {
      const id_product = req.params.id_product;
      // const image = await cloudinary.uploader.upload(req.file.path, {
      //   folder: "Store.id",
      // });

      req.body.stock = parseInt(req.body.stock);
      req.body.price = parseInt(req.body.price);
      req.body.category_id = parseInt(req.body.category_id);
      const {
        photo: [photo],
      } = req.files;
      req.body.photo = photo.path;

      await ModelProduct.updateData(id_product, req.body);
      response(res, 200, true, data, "update data success");
    } catch (error) {
      console.log(error);
      response(res, 500, false, "update data failed");
    }
  },

  delete: (req, res) => {
    try {
      ModelProduct.deleteProduct(req.params.id_product).then(() =>
        response(res, 200, true, "Delete product success")
      );
    } catch (error) {
      console.log(error);
      response(res, 500, false, "Delete Product failed");
    }
  },
};

exports.ProductController = ProductController;
