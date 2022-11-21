const pool = require("../config/db");

const selectData = () => {
  Pool.query(`SELECT FROM category`);
};

const selectDataCategory = () => {
  return Pool.query(
    `SELECT products.name,products.stock,  products.price, category.name as category, products.photo FROM products  JOIN category ON products.category_id = category.id `
  );
};

const insertData = (data) => {
  const { id, name } = data;
  return Pool.query(`INSERT INTO category (id,name) VALUES(${id},'${name}')`);
};

const updateData = (id, data) => {
  const { name } = data;
  return Pool.query(`UPDATE products SET name='${name}'WHERE id='${id}'`);
};

const deleteData = (id) => {
  return Pool.query(`DELETE FROM category where id='${id}'`);
};
const searchData = (id) => {
  return pool.query(`SEARCH FROM category WHERE id='${id}'`);
};
const searchName = (name) => {
  return pool.query(`SEARCH FROM category WHERE id='${name}'`);
};

module.exports = {
  selectData,
  selectDataCategory,
  insertData,
  deleteData,
  updateData,
  searchData,
  searchName,
};
