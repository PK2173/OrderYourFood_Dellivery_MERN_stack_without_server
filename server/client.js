require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;
//
app.use(cors());
app.use(express.json());


//
const user = require("./Router/user");
const food = require("./Router/foodinfo");
//
app.use("/user", user);
app.use("/food", food);
//
app.listen(port, () => {
  console.log(`connected localhost:${port}`);
});


