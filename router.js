const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

//memberlarga dahldor routers

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

// others
router.get("/menu", (req, res) => {
  res.send("Menu page");
  //   console.log("Menu page");
});

//
router.get("/community", (req, res) => {
  res.send("Community page");
  //   console.log("community");
});

module.exports = router;
