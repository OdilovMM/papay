console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr");

// 1 Kirish code lar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 30, //for 30 minutes
//     },
//     storage: store,
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.use("/resto", router_bssr); // an'anaviy
app.use("/", router); // React

module.exports = app;
