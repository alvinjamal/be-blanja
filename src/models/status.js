const pool = require("../config/db");
const Pool = require("../config/db");

const postStatus = (data) => {
  const { id_status, name_status } = data;
  return Pool.query(
    `INSERT INTO status(id_status,name_status)VALUES(${id_status},'${name_status}')`
  );
};

const getAll = () => {
  return Pool.query(`SELECT * FROM status`);
};

module.exports = {
  postStatus,
  getAll,
};
