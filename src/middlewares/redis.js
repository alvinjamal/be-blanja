const client = require("../config/redis");
const { response } = require("./common");

const hitCache = async (req, res, next) => {
  const id = req.params.id;
  const product = await client.get(`product/${id}`);
  if (product) {
    return response(res, 200, true, product, "get data success");
    console.log("product", product);
  }
  next();
};

const clearCache = async (res, req, next) => {
  const id = req.params.id;
  client.del(`product/${id}`);
  next();
};

module.exports = { hitCache, clearCache };
