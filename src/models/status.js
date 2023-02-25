const pool = require("../config/db");
const Pool = require("../config/db");

const postStatus = (data) => {
  const { name_status } = data;
  return Pool.query(`INSERT INTO status(name_status)VALUES('${name_status}')`);
};

const getAll = () => {
  return Pool.query(`SELECT * FROM status`);
};

module.exports = {
  postStatus,
  getAll,
};
