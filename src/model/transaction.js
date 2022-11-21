const Pool = require("./../config/db");

const selectData = () => {
  return Pool.query(`SELECT * FROM transaction`);
};

const insertData = (data) => {
  const { id, productId, productName, quantity, price, total } = data;
  return Pool.query(
    `INSERT INTO transaction(id, productId,productName,quantity,price,total) VALUES(${id}, '${productId}', '${productName}', '${quantity}', '${price}', '${total}')`
  );
};

const updateData = (id, data) => {
  const { productId, productName, quantity, price, total } = data;
  return Pool.query(
    `UPDATE transaction SET productId='${productId}', productName='${productName}',quantity=${quantity},price=${price},total=${total} WHERE id=${id}`
  );
};

const deleteData = (id) => {
  return Pool.query(`DELETE FROM transaction where id='${id}'`);
};

module.exports = { selectData, insertData, deleteData, updateData };
