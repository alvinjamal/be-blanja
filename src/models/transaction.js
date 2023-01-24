const Pool = require("../config/db");

const selectTransactionByUser = (user_id) =>
  Pool.query(
    `SELECT transaction.id_transaction,transaction.product_id,transaction.qty_transaction,transaction.total_transaction,transaction.user_id,transaction.seller_id,products.name_product,products.photo_product,products.brand_product,products.price_product FROM transaction INNER JOIN products ON transaction.product_id=products.id_product WHERE transaction.user_id='${user_id}' AND status=0`
  );

const selectDataTransactionbyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select * from transactions where id_transaction = '${id}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const insertTransaction = (data) => {
  const { email, product_id, qty, total, amount, status } = data;
  console.log(data);
  return Pool.query(
    `INSERT INTO transactions(email,product_id,qty,total,amount,status)VALUES('${email}',${product_id},${qty},${total},${amount},0)`
  );
};
const updateTransaction = (id_transaction, dataTransaction) => {
  const { email, product_id, amount, total } = dataTransaction;
  return Pool.query(
    `UPDATE transactions SET email='${email}',product_id='${product_id}',amount='${amount}',total='${total}' WHERE id_transaction='${id_transaction}'`
  );
};

const deleteTransaction = (id_transaction) =>
  Pool.query(
    `DELETE FROM transaction where id_transaction='${id_transaction}'`
  );

module.exports = {
  selectTransactionByUser,
  selectDataTransactionbyId,
  insertTransaction,
  deleteTransaction,
  updateTransaction,
};
