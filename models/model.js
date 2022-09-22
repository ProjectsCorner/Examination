const mongoose = require("mongoose");

const id = (schema) => {
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
    },
  });
};

//module for registering an admin
const newAdminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  // confirm_password: {
  //   type: String,
  //   required: [true, "Please confirm your password"],
  //   validate: {
  //     // this only works on CREATE and  SAVE!!!!
  //     validator: function (el) {
  //       return el === this.password;
  //     },
  //   },
  // },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

id(newAdminSchema);
const Admin = new mongoose.model("admins", newAdminSchema);

//creating new student
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  faculty: {
    type: String,
  },
  department: {
    type: String,
  },
  reg_number: {
    type: String,
  },
  uni_email: {
    type: String,
  },
});
id(studentSchema);
const Student = new mongoose.model("students", studentSchema);

//creating new lecturer
const lecturerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  department: {
    type: String,
  },
  email: {
    type: String,
  },
  passcode: {
    type: String,
  },
});
id(lecturerSchema);
const Lecturer = new mongoose.model("lecturers", lecturerSchema);

module.exports = {
  Admin,
  Student,
  Lecturer,
};
