const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//1- Create a new schema
const accounts = new Schema(
  {
    account_id: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    products: {
      type: [String],
      default: [],
    },
  },
  { timestamp: true }
);

// 2- export the model with the schema
module.exports = mongoose.model("accounts", accounts);
