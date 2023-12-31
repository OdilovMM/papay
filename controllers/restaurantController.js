const Member = require("../models/Member");

let restaurantController = module.exports;

restaurantController.getSignUpMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getSignUpMyRestaurant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR, cont/getSignUpMyRestaurant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signup");
    const data = req.body;
    console.log("body:::", req.body);

    const member = new Member();
    new_member = await member.signupData(data);

    res.json({ state: "succeed", data: new_member });
  } catch (err) {
    console.log(`ERROR, cont/signup, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getLoginMyRestaurant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR, cont/getLoginMyRestaurant, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.loginProcess = async (req, res) => {
  try {
    console.log("POST: cont/login");
    const data = req.body;
    console.log("body:::", req.body);
    const member = new Member();
    const result = await member.loginData(data);

    res.json({ state: "succeed", data: result });
  } catch (err) {
    console.log(`ERROR, cont/login, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.logout = (req, res) => {
  console.log("POST cont/logout");
  res.send("logout sahifasi");
};
