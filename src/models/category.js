const Pool = require("../config/db");

const selectCategory = () => Pool.query("SELECT * FROM category");

const selectDataCategorybyId_id_category = (id_category) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select * from category where id_category = '${id_category}' `,
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
  return Pool.query(
    `UPDATE category SET name='${name}',photo='${photo}' WHERE id_category='${id_category}'`
  );
};

const deleteCategory = (id_category) =>
  Pool.query(`DELETE FROM category where id_category='${id_category}'`);

module.exports = {
  selectCategory,
  selectDataCategorybyId_id_category,
  insertCategory,
  deleteCategory,
  updateCategory,
};
