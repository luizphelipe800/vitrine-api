const express = require("express");
const cors = require("cors");
const path = require("path");
const passport = require("./src/middlewares/passport");
const routes = require("./src/routes");

const app = express();

app.use(express.static(path.resolve(__dirname, "temp")));
app.use("/docs", express.static(path.resolve(__dirname, "docs")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(routes);

module.exports = app;
