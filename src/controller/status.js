const modelStatus = require("../models/status");
const { response, resp } = require("../middlewares/common");

const statusController = {
  insertStatus: async (req, res) => {
    req.body.status = parseInt(req.body.status);
    req.body.id_status = parseInt(req.body.id_status);
    modelStatus
      .postStatus(req.body)
      .then(() => resp(res, 200, true, "Insert status success"))
      .catch((err) => response(res, 404, false, err, "Insert status fail"));
  },
};

exports.statusController = statusController;
