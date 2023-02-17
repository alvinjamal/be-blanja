const Pool = require("../config/db");

const selectCategory = () => Pool.query("SELECT * FROM category");

const selectDataCategorybyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select * from category WHERE id_category = '${id}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const insertCategory = (dataCategory) => {
  const { name, photo } = dataCategory;
  return Pool.query(
    `INSERT INTO category(name,photo)VALUES('${name}','${photo}')`
  );
};

const updateCategory = (id_category, data) => {
  const { name, photo } = data;
  new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE category SET name = COALESCE($2, name), photo = COALESCE($3, photo) where id_category = $1`,
      [id_category, name, photo],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const deleteCategory = (id_category) =>
  Pool.query(`DELETE FROM category WHERE id_category='${id_category}'`);

module.exports = {
  selectCategory,
  selectDataCategorybyId,
  insertCategory,
  deleteCategory,
  updateCategory,
};
