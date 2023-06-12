const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const Routes = require("./routes/Router");
const dbURI = process.env.DBURI;


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(Routes);

module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
