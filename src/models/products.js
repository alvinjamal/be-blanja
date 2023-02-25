const Pool = require("../config/db");

const selectData = (data) => {
  const { page, limit, offset, sort, sortby, search } = data;
  return Pool.query(
    `select products.id_product,products.name_product,products.stock,products.price,products.brand,category.name_category as category,products.photo
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where (products.name_product) ilike '%${search}%' order by ${sortby} ${sort} limit ${limit} offset ${offset} `
  );
};

const selectDatabyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.id_product,products.name_product,products.stock,products.price,products.brand,category.name_category as category,products.photo
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

const deleteProduct = (id_product) =>
  Pool.query(`DELETE FROM products where id_product='${id_product}'`);

const insertData = (user_id, updateData) => {
  const { name_product, stock, price, photo, brand, category_id } = updateData;
  return Pool.query(
    `INSERT INTO products(name_product,stock,price,photo,brand,category_id,user_id) VALUES('${name_product}',${stock},${price},'${photo}','${brand}',${category_id},'${user_id}')`
  );
};

// const findUsers = (id_product) =>
//   new Promise((resolve, reject) =>
//     Pool.query(
//       `SELECT * FROM products where id_product='${id_product}'`,
//       (err, result) => {
//         if (!err) {
//           resolve(result);
//         } else {
//           reject(err);
//         }
//       }
//     )
//   );

const updateData = (id_product, data) => {
  const { name_product, stock, price, brand, category_id } = data;
  new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE products SET name_product = COALESCE($2, name_product), stock = COALESCE($3, stock), price = COALESCE($4, price),  brand = COALESCE($5, brand), category_id = COALESCE($6, category_id) where id_product = $1`,
      [id_product, name_product, stock, price, brand, category_id],
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

const selectDataProductbyCategory = (category_id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.id_product,products.name_product,products.stock,products.price,products.brand,category.name_category as category,products.photo
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
  updateData,
  // findUsers,
  deleteProduct,
  selectDatabyId,
  selectDataProductbyCategory,
};
