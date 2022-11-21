const Pool = require("./../config/db");

const selectData = (data) => {
  const { limit, offset, sort, sortby, search } = data;
  return Pool.query(
    `SELECT * FROM products ORDER BY products.${sortby} ${sort} `
  );
};
const selectDataWithCategory = () => {
  return Pool.query(
    `SELECT products.name,products.stock,  products.price, category.name as category, products.photo FROM products  JOIN category ON products.category_id = category.id `
  );
};

const selectDatabyId = (id) => {
  return Pool.query(
    `SELECT products.name,products.stock,  products.price, category.name as category FROM products  INNER JOIN category ON products.category_id = category.id WHERE products.id='${id}' `
  );
};

const insertData = (data, id) => {
  const { name, stock, price, photo } = data;
  console.log(data);
  return Pool.query(
    `INSERT INTO products(id,name,stock,price,photo) VALUES('${id}','${name}',${stock},${price},'${photo}')`
  );
};

const updateData = (id, data) => {
  const { name, stock, price, category_id } = data;
  return Pool.query(
    `UPDATE products SET name='${name}',stock='${stock}',price='${price}',category_id=${category_id} WHERE id='${id}'`
  );
};

const deleteData = (id) => {
  return Pool.query(`DELETE FROM products where id='${id}'`);
};

module.exports = {
  selectData,
  selectDataWithCategory,
  insertData,
  deleteData,
  updateData,
  selectDatabyId,
};
