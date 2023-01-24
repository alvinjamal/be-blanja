const Pool = require("../config/db");

const postStatus = (dataStatus) => {
  const { id_status, name } = dataStatus;
  return Pool.query(
    `INSERT INTO status(id_status,name)VALUES(${id_status},'${name}')`
  );
};

module.exports = {
  postStatus,
};
