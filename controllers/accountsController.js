const accounts = require("../models/accounts");

const postData = async (req, res) => {
  try {
    const { account_id, limit, products } = req.body;
    const newAccount = new accounts({
      account_id: account_id,
      limit: limit,
      products: products,
    });
    const add = await newAccount.save();
    res.status(200).json(add);
  } catch (error) {
    console.error("Error Add data:", error);
    res.status(500).json({ error: "An error occurred while Add data" });
  }
};

const postDataC = async (req, res) => {
  try {
    const { account_id, limit, products } = req.body;
    const add = await accounts.create({
      account_id: account_id,
      limit: limit,
      products: products,
    });
    res.status(200).json(add);
  } catch (error) {
    console.error("Error Add data:", error);
    res.status(500).json({ error: "An error occurred while Add data" });
  }
};

const getData = async (req, res) => {
  try {
    const allData = await accounts.find();
    res.status(200).json(allData);
    console.log(allData);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};

const getDataByFindOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await accounts.findOne({ account_id: id });
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log("Error retrieving data:", err);
    res.status(500).json({ err: "An error occurred while getting data" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { limit, products } = req.body;

    const updatedDocument = await accounts.findOneAndUpdate(
      { account_id: id },
      { $set: { limit, products } },
      { new: true }
    );

    if (updatedDocument) {
      console.log("Successfully updated the document:", updatedDocument);
      res.status(200).send("done");
    } else {
      console.log("No document found with the specified condition.");
      res.status(404).send("No document found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while updating the document");
  }
};

module.exports = {
  postData,
  getData,
  postDataC,
  getDataByFindOne,
  updateUser,
};
198100