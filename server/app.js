const dot = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require("multer");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/route/userauth.route")(app);
require("./app/route/productactivity.route")(app);
require("./app/route/upload.route")(app);

// simple route

let name = dot.parsed.SIGN;
app.get("/", (req, res) => {
  res.json({ message: "Welcome to honeyBunnyBD.", name });
});

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
