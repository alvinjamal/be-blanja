const ModelCheckout = require("../models/checkout");
const { response } = require("../middlewares/common");

const checkoutController = {
  insertCheckout: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log("id_user", user_id);
      req.body.transaction_id = parseInt(req.body.transaction_id);
      req.body.product_id = parseInt(req.body.product_id);
      req.body.status_id = parseInt(req.body.status_id);
      await ModelCheckout.insertCheckout(user_id, req.body);
      return response(res, 200, true, req.body, "Input checkout succes");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Input checkout fail");
    }
  },
  putStatus: async (req, res) => {
    try {
      //   const user_id = req.payload.id_user;
      const { id_checkout } = req.body;
      const data = {
        id_checkout,
      };
      console.log(data);
      const { rows } = await ModelCheckout.putStatusCheckout(data);
      return response(res, 200, true, rows, "Put status checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Put status checkout fail");
    }
  },
  putStatusId: async (req, res) => {
    try {
      const { rows } = await ModelCheckout.putStatusCheckoutId(
        req.params.id_checkout
      );
      return response(res, 200, true, rows, "Put status checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Put status checkout fail");
    }
  },
  getCheckout: async (req, res) => {
    const search = req.query.search || "";
    try {
      const user_id = req.payload.id_user;
      const result = await ModelCheckout.selectCheckout(user_id, search);
      response(res, 200, true, result.rows, "Get All checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get All checkout fail");
    }
  },
  getCheckoutDone: async (req, res) => {
    const search = req.query.search || "";
    try {
      const user_id = req.payload.id_user;
      const result = await ModelCheckout.selectCheckoutDone(user_id, search);
      response(res, 200, true, result.rows, "Get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get checkout fail");
    }
  },
  getCheckoutDetail: async (req, res) => {
    try {
      const result = await ModelCheckout.selectDataCheckoutbyId(
        req.params.id_checkout
      );
      response(res, 200, true, result.rows, "get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "get checkout failed");
    }
  },
  getCheckoutSeller: async (req, res) => {
    const search = req.query.search || "";
    try {
      const user_id = req.payload.id_user;
      const result = await ModelCheckout.selectCheckoutSeller(user_id, search);
      response(res, 200, true, result.rows, "Get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get checkout fail");
    }
  },
  getCheckoutDelivered: async (req, res) => {
    const search = req.query.search || "";
    try {
      const user_id = req.payload.id_user;
      const result = await ModelCheckout.selectCheckoutDelivered(
        user_id,
        search
      );
      response(res, 200, true, result.rows, "Get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get checkout fail");
    }
  },
};
exports.checkoutController = checkoutController;
