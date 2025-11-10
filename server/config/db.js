const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config();

const con = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("db is con");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = con;
