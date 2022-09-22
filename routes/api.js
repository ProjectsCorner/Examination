const express = require("express");
const router = express.Router();
const { register_admin, admin_login } = require("../controllers/admin");
const {
  register_lecturer,
  login_lecturer,
} = require("../controllers/lecturer");
const { register_student, login_student } = require("../controllers/student");

//admin  routes
const registeradmin = router.post("/newadmin", register_admin);
const loginadmin = router.post("/admin", admin_login);

//student routes
const newstudent = router.post("/newstudent", register_student);
const student = router.post("/student", login_student);

//lecturer routes
const newlecturer = router.post("/newlecturer", register_lecturer);
const lecturer = router.post("/lecturer", login_lecturer);

module.exports = {
  registeradmin,
  loginadmin,
  newstudent,
  newlecturer,
  lecturer,
  student,
};
