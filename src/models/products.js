const Pool = require("../config/db");

const selectData = (data) => {
  const { page, limit, offset, sort, sortby, search } = data;
  return Pool.query(
    `select products.id_product,products.name_product,products.stock,products.price,products.brand,category.name as category,products.photo
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where (products.name_product) ilike '%${search}%' order by ${sortby} ${sort} limit ${limit} offset ${offset} `
  );
};

const selectDatabyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.id_product,products.name_product,products.stock,products.price,products.brand,category.name as category,products.photo
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where id_product = '${id}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
const insertData = (user_id, postData) => {
  const { name_product, stock, price, photo, brand, category_id } = postData;
  return Pool.query(
    `INSERT INTO products(name_product,stock,price,photo,brand,category_id,user_id) VALUES('${name_product}',${stock},${price},'${photo}','${brand}',${category_id},'${user_id}')`
  );
};

const updateData = (id_product, data) => {
  const { name_product, stock, price, photo, brand } = data;
  return Pool.query(
    `UPDATE products SET name_product='${name_product}',stock='${stock}',price='${price}',photo='${photo}',brand='${brand}' WHERE id_product='${id_product}'`
  );
};

const deleteData = (id_product) => {
  return Pool.query(`DELETE FROM products where id_product='${id_product}'`);
};

const selectDataProductbyCategory = (category_id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.id_product,products.name_product,products.stock,products.price,products.brand,category.name as category,products.photo
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where category_id = '${category_id}'`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

module.exports = {
  selectData,
  insertData,
  deleteData,
  updateData,
  selectDatabyId,
  selectDataProductbyCategory,
};
