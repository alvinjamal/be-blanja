const Pool = require("../config/db");

const create = (data) => {
  const {
    id_user,
    name,
    email,
    phone,
    password,
    store,
    gender,
    date,
    address,
    role,
    otp,
  } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id_user,name,email,phone,password,store,gender,date,address,role,verif,otp) VALUES('${id_user}','${name}','${email}','${phone}','${password}','${store}','${gender}','${date}','${address}','${role}',0,'${otp}')`,
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

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const verification = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET verif=1 WHERE email='${email}'`,
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

const changePassword = (email, password) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET password='${password}' WHERE email='${email}'`,
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

const findUsers = (id_user) =>
  new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM users where id_user='${id_user}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );

const getUserById = (id_user) => {
  console.log(id_user);
  return Pool.query(`SELECT * FROM users WHERE id_user = '${id_user}'`);
};
const updateProfile = (id_user, name, email, phone, gender, date, address) =>
  new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET name = COALESCE($2, name), email = COALESCE($3, email), phone = COALESCE($4, phone),
      gender = COALESCE($5, gender),date = COALESCE($6, date),address = COALESCE($7, address) WHERE id_user = $1`,
      [id_user, name, email, phone, gender, date, address],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );

const getAllUser = () => {
  return Pool.query(`SELECT * FROM users`);
};

const updateProfileSeller = ({ id_user, store, email, phone }) =>
  new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET store = COALESCE($2, store), email = COALESCE($3, email), phone = COALESCE($4, phone) WHERE id_user = $1`,
      [id_user, store, email, phone],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );

const updatePhotoProfile = (id_user, update) => {
  const { photo } = update;
  return Pool.query(
    `UPDATE users SET photo='${photo}' WHERE id_user='${id_user}'`
  );
};

const deleteUser = (id_user) => {
  return Pool.query(`DELETE FROM users where id_user='${id_user}'`);
};

module.exports = {
  create,
  findEmail,
  verification,
  changePassword,
  findUsers,
  getAllUser,
  getUserById,
  updatePhotoProfile,
  updateProfile,
  updateProfileSeller,
  deleteUser,
};
