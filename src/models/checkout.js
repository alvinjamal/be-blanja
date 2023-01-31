const Pool = require("../config/db");

const insertCheckout = (user_id, dataCheckout) => {
  const { transaction_id, product_id } = dataCheckout;
  return Pool.query(
    `INSERT INTO checkout(transaction_id,user_id,product_id,status_id)VALUES(${transaction_id},'${user_id}',${product_id},1);
    UPDATE transactions SET status=2`
  );
};

const selectCheckout = (user_id, search) =>
  Pool.query(
    `SELECT checkout.*,transactions.qty,transactions.total,products.name_product,products.price,products.photo,status.name_status,users.name,users.address FROM checkout INNER JOIN transactions ON checkout.transaction_id=transactions.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id=users.id_user WHERE checkout.user_id='${user_id}' AND checkout.status_id=2 AND (products.name_product) ilike '%${search}%'`
  );

const selectCheckoutDone = (user_id, search) =>
  Pool.query(
    `SELECT checkout.*,transactions.qty,transactions.total,products.name_product,products.price,products.photo,status.name_status,users.name,users.address FROM checkout INNER JOIN transactions ON checkout.transaction_id= transactions.id_transaction INNER JOIN products ON checkout.product_id= products.id_product INNER JOIN status ON checkout.status_id= status.id_status INNER JOIN users ON checkout.user_id= users.id_user WHERE checkout.user_id= '${user_id}' AND checkout.status_id=2 AND (products.name_product) ilike '%${search}%'`
  );

const selectCheckoutSeller = (user_id, search) =>
  Pool.query(
    `SELECT checkout.*,transactions.qty,transactions.total,products.name_product,products.price,status.name_status,users.name,users.address FROM checkout INNER JOIN transactions ON checkout.transaction_id=transactions.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id=users.id_user WHERE checkout.user_id='${user_id}' AND checkout.status_id=1 AND (products.name_product) ilike '%${search}%'`
  );

const selectCheckoutDelivered = (user_id, search) =>
  Pool.query(
    `SELECT checkout.*,transactions.qty,transactions.total,products.name_product,products.price,status.name_status,users.name,users.address FROM checkout INNER JOIN transactions ON checkout.transaction_id= transactions.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id= users.id_user WHERE checkout.user_id'=${user_id}' AND checkout.status_id=2 AND (products.name_product) ilike '%${search}%'`
  );
const putStatusCheckout = (data) =>
  new Promise((resolve, reject) => {
    const { id_checkout } = data;
    Pool.query(
      `UPDATE checkout SET status_id=2 WHERE id_checkout=${id_checkout}`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });

const putStatusCheckoutId = (id_checkout) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE checkout SET status_id=2 WHERE id_checkout=${id_checkout}`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });

const selectDataCheckoutbyId = (id_checkout) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `SELECT checkout.*,transactions.qty,transactions.total,products.name_product,products.price,products.photo,status.name_status,users.name,users.address FROM checkout INNER JOIN transactions ON checkout.transaction_id=transactions.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id=users.id_user WHERE checkout.id_checkout=${id_checkout} `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

module.exports = {
  insertCheckout,
  selectCheckout,
  selectCheckoutSeller,
  selectCheckoutDelivered,
  putStatusCheckout,
  selectCheckoutDone,
  selectDataCheckoutbyId,
  putStatusCheckoutId,
};
