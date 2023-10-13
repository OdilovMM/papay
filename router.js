const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Homepage");
//   console.log("homepage");
});

router.get("/menu", (req, res) => {
  res.send("Menu page");
//   console.log("Menu page");
});

router.get("/community", (req, res) => {
  res.send("Community page");
//   console.log("community");
});

module.exports = router;
