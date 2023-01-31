const ModelStatus = require("../models/status");
const { response, resp } = require("../middlewares/common");

const statusController = {
  insertStatus: async (req, res) => {
    req.body.id_status = parseInt(req.body.id_status);
    req.body.name_status = parseInt(req.body.name_status);
    ModelStatus.postStatus(req.body)
      .then(() => resp(res, 200, true, "Insert status success"))
      .catch((err) => response(res, 404, false, err, "Insert status fail"));
  },
};

exports.statusController = statusController;
