const { Student } = require("../models/model");

const register_student = async (req, res) => {
  const regnumber = await Student.findOne({
    reg_number: { $eq: req.body.reg_number },
  });
  if (!regnumber) {
    const student = new Student({
      name: req.body.name,
      faculty: req.body.faculty,
      department: req.body.department,
      reg_number: req.body.reg_number,
      uni_email: req.body.uni_email,
    });

    try {
      const save_student = await student.save();
      res.send({
        status: true,
        data: "Student",
        result: save_student,
      });
    } catch (error) {
      res.send({
        status: false,
        data: "Error occured",
        result: error,
      });
    }
  } else {
    res.send({
      data: "Student Exists",
      status: false,
    });
  }
};

const login_student = async (req, res) => {
  try {
    const mystudent = await Student.find({
      $and: [
        { uni_email: req.body.uni_email },
        { reg_number: req.body.reg_number },
      ],
    });

    if (mystudent) {
      res.send({
        data: "student",
        status: true,
        result: mystudent,
      });
    } else {
      res.send({
        status: false,
        data: "Account not found ",
      });
    }
  } catch (error) {
    res.send({
      data: "Error",
      status: false,
    });
  }
};
module.exports = {
  register_student,
  login_student,
};
