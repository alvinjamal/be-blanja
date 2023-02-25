const Pool = require("../config/db");

const selectDataTransactionbyId = (id_transaction) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select * from transactions where id_transaction = '${id_transaction}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const selectDataTransactionAll = (user_id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select transactions.id_transaction,transactions.product_id,transactions.qty,transactions.total,transactions.user_id,products.name_product,products.photo,products.brand,products.price FROM transactions INNER JOIN products ON transactions.product_id=products.id_product WHERE transactions.user_id='${user_id}' AND status=2 `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const insertTransaction = (user_id, data) => {
  const { product_id, qty, total, status } = data;
  console.log(data);
  return Pool.query(
    `INSERT INTO transactions(product_id,qty,total,user_id,status)VALUES(${product_id},${qty},${total},'${user_id}',2)`
  );
};

const updateTransaction = (id_transaction, dataTransaction) => {
  const { product_id, amount, total, qty, status } = dataTransaction;
  return Pool.query(
    `UPDATE transactions SET=product_id='${product_id}',amount='${amount}',total='${total}',qty='${qty}',2 WHERE id_transaction='${id_transaction}'`
  );
};

const deleteTransaction = (id_transaction) =>
  Pool.query(
    `DELETE FROM transactions WHERE id_transaction='${id_transaction}'`
  );

module.exports = {
  selectDataTransactionbyId,
  insertTransaction,
  deleteTransaction,
  updateTransaction,
  selectDataTransactionAll,
};
