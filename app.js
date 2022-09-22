const { json } = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5009;
const ConnectDB = require("./database/connect");
const {
  registeradmin,
  loginadmin,
  newstudent,
  student,
  newlecturer,
  lecturer,
} = require("./routes/api");

app.use(cors());
app.use(json());
app.use(express.static("public"));

//home routes
// app.get("/", (req, res) => {
//   res.send("Beacon exam system api");
// });

//admin routes
app.use("api/v6/", registeradmin);
app.use("/api/v6/", loginadmin);

//student routes
app.use("api/v6/", newstudent);
app.use("api/v6/", student);

//lecturer routes
app.use("api/v6", newlecturer);
app.use("api/v6/", lecturer);

ConnectDB();
app.listen(port, console.log(`server started on port: ${port}.......`));
