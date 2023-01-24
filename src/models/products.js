const Pool = require("../config/db");

const selectData = (data) => {
  const { limit, offset, sort, sortby, search } = data;
  return Pool.query(
    `SELECT * FROM products ORDER BY products.${sortby} ${sort} `
  );
};

const selectDatabyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.id_product,products.name,products.stock,products.price,products.brand,category.name as category,products.photo
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
const insertData = (data) => {
  const { name, stock, price, photo, brand, category_id } = data;
  console.log("data", data);
  return Pool.query(
    `INSERT INTO products(name,stock,price,photo,brand,category_id) VALUES('${name}',${stock},${price},'${photo}','${brand}',${category_id})`
  );
};

const updateData = (id_product, data) => {
  const { name, stock, price, photo, brand } = data;
  return Pool.query(
    `UPDATE products SET name='${name}',stock='${stock}',price='${price}',photo='${photo}',brand='${brand}' WHERE id_product='${id_product}'`
  );
};

const deleteData = (id_product) => {
  return Pool.query(`DELETE FROM products where id_product='${id_product}'`);
};

module.exports = {
  selectData,
  insertData,
  deleteData,
  updateData,
  selectDatabyId,
};
