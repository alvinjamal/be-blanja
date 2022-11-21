const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const mainRouter = require("./src/routes/users");
const { response } = require("./src/middlewares/common");
const { get } = require("./src/routes/users");
const productProduct = require("./src/routes/products");
const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.json());

app.use("/users", mainRouter);
app.use("/img", express.static("./upload"));
app.use("/products", productProduct);

app.all("*", (req, res, next) => {
  response(res, 404, false, null, "404 Not Found");
});

app.get("/", (req, res, next) => {
  res.status(200).json({ status: "success", statusCode: 200 });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
