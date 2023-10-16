const Member = require("../models/Member");
let memberController = module.exports;

memberController.signup = async (req, res) => {
  try {
    console.log("POST: cont/signup");
    const data = req.body;
    console.log("body:::", req.body);

    const member = new Member();
    const new_member = await member.signupData(data);

    res.json({state: 'succeed', datsa: new_member});
  } catch (error) {
    console.log(`ERROR, cont/signup, ${error.message}`);
    res.json({state: 'fail', message: error.message})
  }
};
memberController.login = (req, res) => {
  console.log("POST cont/login");
  res.send("login sahifasi");
};
memberController.logout = (req, res) => {
  console.log("POST cont/logout");
  res.send("logout sahifasi");
};
