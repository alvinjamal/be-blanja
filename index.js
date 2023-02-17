const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const xss = require("xss-clean");
const { response } = require("./src/middlewares/common");
const app = express();
const upload = require("./src/middlewares/upload");

const mainRouter = require("./src/routes/index");

app.use(morgan("dev"));
app.use(cors("*"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(xss());

app.use("/", mainRouter);
app.use("/img", express.static("./upload"));
app.use(upload.array());

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
