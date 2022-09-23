const mongoose = require("mongoose");
require("dotenv/config");

const ConnectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://GastonUg:gastgast@beaconexaminationsystem.roslunw.mongodb.net/BES-API?retryWrites=true&w=majority"
    )
    .then(() => console.log("DATABASE IS CONNECTED SUCCESSFULLY......"))
    .catch((err) => console.log(err));
};

module.exports = ConnectDB;
