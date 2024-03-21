require("dotenv").config();
const mongoose = require("mongoose");
const DB = process.env.mongodbURL;

const connection = mongoose
  .connect(DB)
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log("err", err));

module.exports = {
  connection,
};
