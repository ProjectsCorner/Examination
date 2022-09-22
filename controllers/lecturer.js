const { Lecturer } = require("../models/model");

//logic for registering new lecturer
const register_lecturer = async (req, res) => {
  const email = await Lecturer.findOne({
    email: { $eq: req.body.email },
  });

  if (!email) {
    const lecturer = new Lecturer({
      name: req.body.name,
      department: req.body.department,
      email: req.body.email,
      passcode: req.body.passcode,
    });

    try {
      const save_lecturer = await lecturer.save();
      res.send({
        status: true,
        data: "Lecturer added",
        result: save_lecturer,
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
      status: false,
      data: "Lecturer Exists",
    });
  }
};

//logic for loging in a new lecturer
const login_lecturer = async (req, res) => {
  try {
    const mylecturer = await Lecturer.find({
      $and: [{ email: req.body.email }, { passcode: req.body.passcode }],
    });
    if (mylecturer) {
      res.send({
        result: mylecturer,
        data: "lecturer",
        status: true,
      });
    } else {
      res.send({
        data: "Account not found",
        status: false,
      });
    }
  } catch (error) {
    res.send({
      data: "Error occurerd",
      result: error,
      status: false,
    });
  }
};

module.exports = {
  register_lecturer,
  login_lecturer,
};
