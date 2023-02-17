const ModelStatus = require("../models/status");
const { response, resp } = require("../middlewares/common");

const statusController = {
  insertStatus: async (req, res) => {
    req.body.id_status = parseInt(req.body.id_status);
    req.body.name_status = parseInt(req.body.name_status);
    ModelStatus.postStatus(req.body)
      .then(() => resp(res, 200, true, "Insert status success"))
      .catch((err) => response(res, 500, false, err, "Insert status fail"));
  },
  getStatus: (req, res) => {
    ModelStatus.getAll()
      .then((result) =>
        response(res, 200, true, result.rows, "Get All Status Success")
      )
      .catch((err) => response(res, 500, false, err, "Get All Status Failed"));
  },
};

exports.statusController = statusController;
