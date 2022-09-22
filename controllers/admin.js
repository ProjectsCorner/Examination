const { Admin } = require("../models/model");

//the brain for registering an admin
const register_admin = async (req, res) => {
  const myemail = await Admin.findOne({
    email: { $eq: req.body.email },
  });
  if (!myemail) {
    const admin = new Admin({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
    });
    try {
      const save_added_admin = await admin.save();
      res.send({
        status: true,
        data: "Admin",
        result: save_added_admin,
      });
    } catch (error) {
      res.send({
        status: false,
        data: "An Error Occured.............",
        result: error,
      });
    }
  } else {
    res.send({ data: "email already used ", status: false });
  }
};

//the brain for login of admin
const admin_login = async (req, res) => {
  try {
    const current_admin = await Admin.find({
      $and: [{ password: req.body.password }, { email: req.body.email }],
    });
    if (current_admin) {
      res.send({ user: current_admin, status: true, data: "Login successful" });
    } else {
      res.send({ status: false, data: "No matching details" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, data: "An Error Occured", result: error });
  }
};

module.exports = { register_admin, admin_login };
