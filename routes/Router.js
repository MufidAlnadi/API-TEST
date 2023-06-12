const express = require("express");
const router = express.Router();
const AddAcountController = require("../controllers/accountsController");
// const userController = require("../controllers/userController");

router.get("/getAccountData", AddAcountController.getData);
router.post("/createAccount", AddAcountController.postData);
router.post("/createAccountC", AddAcountController.postDataC);
router.get("/getDataByFindOne/:id", AddAcountController.getDataByFindOne);
router.put("/updateUser/:id", AddAcountController.updateUser);

module.exports = router;
