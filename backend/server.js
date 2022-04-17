const express = require("express");
const app = express();
const dotenv = require("dotenv");
  const path = require("path");
const cors = require("cors");
const { connectToMongoDB } = require("./database/db");
// const Joi = require('joi'); //used for validation
dotenv.config();
const port = process.env.HTTP;
const routes = require("./router/routes");

connectToMongoDB();
app.use(express.static("public")); //to access the files in public folder
app.use(cors()); // it enables all cors requests

app.use(express.static("./uploads"));

// app.use("/images/uploads", express.static("./uploads"));

app.use(express.json());

app.use("/api/v1", routes);
// app.use(api/v1/routes)

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(7860, () => {
  console.log("your server has been started");
});


// REACT_APP_API_KEY = https://craftspotmarket.com
