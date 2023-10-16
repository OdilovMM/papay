console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router");

// 1 Kirish code lar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code

// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.use("/", router);              // React
// app.use("/restaurant", router_bssr); // an'anaviy 

module.exports = app;
