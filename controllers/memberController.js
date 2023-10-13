let memberController = module.exports;

memberController.home = (req, res) => {
    console.log('GET cont.home')
  res.send("Homepage");
};
memberController.signup = (req, res) => {
    console.log('POST cont.signup')
  res.send("Signup");
};
memberController.login = (req, res) => {
    console.log('POST cont.;ogin')
  res.send("Login");
};
memberController.logout = (req, res) => {
    console.log('GET cont.logout')
  res.send("LOgaout");
};
