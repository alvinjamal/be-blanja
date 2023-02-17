const { response } = require("../middlewares/common");
const {
  create,
  findEmail,
  verification,
  changePassword,
  getAllUser,
  getUserById,
  findUsers,
  updateProfile,
  updateProfileSeller,
  updatePhotoProfile,
  deleteUser,
} = require("../models/users");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { generateToken, decodeToken } = require("../helpers/auth");
const email = require("../middlewares/email");
const cloudinary = require("../config/photo");

const Port = process.env.PORT;
const Host = process.env.HOST;

const UsersController = {
  register: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    let role = req.params.role;

    if (users) {
      return response(res, 500, false, "Email Already Use", " Register Fail");
    }

    // create otp
    let digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id_user: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password,
      store: req.body.store,
      gender: req.body.gender,
      date: req.body.date,
      address: req.body.address,
      role,
      otp,
    };
    try {
      const result = await create(data);
      if (result) {
        let verifUrl = `http://${Host}:${Port}/users/${req.body.email}/${otp}`;
        let text = `Hello ${req.body.name} \n Thank you for join us. Please confirm your email by clicking on the following link ${verifUrl}`;
        const subject = `${otp} is your otp`;
        let sendEmail = email(req.body.email, subject, text);
        if (sendEmail == "email not sent!") {
          return response(res, 500, false, null, "Register Fail");
        }
        response(
          res,
          200,
          true,
          { email: req.body.email },
          "Register Success Please Check Your Email"
        );
      }
    } catch (err) {
      console.log(err);
      response(res, 500, false, err, " Register Fail");
    }
  },

  refresh: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return resp(res, 500, false, "Email not found");
    }
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return resp(res, 500, false, "Wrong refresh token ");
    }
    const payload = {
      id_user: users.id_user,
      email: users.email,
      role: users.role,
    };
    users.newToken = generateToken(payload);
    resp(res, 200, true, users, "Success get new token ");
  },

  login: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 500, false, null, " email not found");
    }
    if (users.verif == 0) {
      return response(res, 500, false, null, " email not verified");
    }
    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 500, false, null, "wrong password");
    }
    delete users.password;
    delete users.otp;
    delete users.verif;
    let payload = {
      id_user: users.id_user,
      email: users.email,
      role: users.role,
    };
    users.token = generateToken(payload);
    // users.newToken = generateToken(payload);
    response(res, 200, true, users, "Login Success");
  },

  verificationOtp: async (req, res) => {
    const { email, otp } = req.body;
    const {
      rows: [users],
    } = await findEmail(email);
    if (!users) {
      return response(res, 500, false, null, " Email Not Found");
    }

    if (users.otp == otp) {
      const result = await verification(req.body.email);
      return response(res, 200, true, result, " Verification email Success");
    }
    return response(
      res,
      500,
      false,
      null,
      " Wrong otp please check your email"
    );
  },

  forgotPassword: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 500, false, null, " email not found");
    }
    let payload = {
      email: req.body.email,
    };
    const token = generateToken(payload);

    let text = `Hello ${users.name} \n please click link below to reset password ${process.env.API}forgot/${token}`;
    const subject = `Reset Password`;
    let sendEmail = email(req.body.email, subject, text);
    if (sendEmail == "Email not sent!") {
      return response(res, 500, false, null, "email fail");
    }
    return response(res, 200, true, null, "Send email success");
  },

  resetPassword: async (req, res) => {
    const token = req.params.token;
    const decoded = decodeToken(token);
    const {
      rows: [users],
    } = await findEmail(decoded.email);
    if (!users) {
      return response(res, 500, false, null, " email not found");
    }
    let password = bcrypt.hashSync(req.body.password);
    const result = await changePassword(decoded.email, password);
    return response(res, 200, true, result, " Change Password success");
  },

  getUser: async (req, res) => {
    try {
      const id_user = req.payload.id_user;
      const result = await getUserById(id_user);
      response(res, 200, true, result.rows, "Success Get User By Token");
    } catch (error) {
      response(res, 400, false, error, "Get User By Token Fail");
    }
  },

  getAll: async (req, res) => {
    try {
      const result = await getAllUser();
      response(res, 200, true, result.rows, "Success Get User");
    } catch (error) {
      response(res, 400, false, error, "Get User Fail");
    }
  },

  editProfile: async (req, res) => {
    try {
      const { name, email, phone, gender, date, address } = req.body;
      const { id_user } = req.payload;
      console.log(id_user);
      const {
        rows: [users],
      } = await findUsers(id_user);

      if (!users) {
        response(res, 500, false, null, "User tidak ditemukan");
      } else {
        const dataProfile = {
          id_user,
          name: name || null,
          email: email || null,
          phone: phone || null,
          gender: gender || null,
          date: date || null,
          address: address || null,
        };

        await updateProfile(dataProfile);
        response(res, 200, true, dataProfile, "update data success");
      }
    } catch (error) {
      console.log(error);
      response(res, 500, false, "update data failed");
    }
  },
  putPhoto: async (req, res) => {
    try {
      const id_user = req.payload.id_user;
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "toko",
      });

      const update = {
        photo: image.url,
      };
      await updatePhotoProfile(id_user, update);
      return response(res, 200, true, req.body, "Update Photo Success");
    } catch (err) {
      return response(res, 500, false, err, "Update Photo Fail");
    }
  },
  editProfileSeller: async (req, res) => {
    try {
      const { store, address, email, phone } = req.body;
      const { id_user } = req.payload;
      console.log(id_user);

      const {
        rows: [users],
      } = await findUsers(id_user);

      if (!users) {
        response(res, 500, false, null, "User not found");
      } else {
        const dataProfileSeller = {
          id_user,
          store: store || null,
          email: email || null,
          address: address || null,
          phone: phone || null,
        };

        await updateProfileSeller(dataProfileSeller);
        response(res, 200, true, dataProfileSeller, "update data success");
      }
    } catch (error) {
      console.log(error);
      response(res, 500, false, error, "update data failed");
    }
  },

  delete: (req, res) => {
    try {
      deleteUser(req.params.id_user).then(() =>
        response(res, 200, true, "Delete user success")
      );
    } catch (error) {
      console.log(error);
      response(res, 500, false, "Delete user failed");
    }
  },
};
exports.UsersController = UsersController;
