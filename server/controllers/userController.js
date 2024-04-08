const jwt = require('jsonwebtoken');
const { secretKey } = require("../modules/jwt");
const Users = require('../models/userModel');

module.exports.signup = (req, res) => {
  let { username, password } = req.body;

  // check if usr already exits
  Users.findOne({ username })
    .then((user) => {
      // if doesn't exists save, else invalid
      if (!user) {
        Users.create({ username, password });
        const token = jwt.sign({ username }, secretKey);
        res.status(200).json({ status: true, token });
        // console.log("CREATED A USER ACCOUNT FOR:", username);
      } else {
        res.status(400).json({ status: false, message: "USER ALREADY EXISTS!" });
      }
    })

}

module.exports.login = (req, res) => {
  let { username, password } = req.body;
  // console.log(username, password)

  // check if usr exists
  Users.findOne({ username, password })
    .then(user => {
      // if user exists then sucess, else fail
      if (user) {
        const token = jwt.sign({ username }, secretKey);
        res.status(200).json({ status: true, token });
        // console.log(username, "LOGGED IN");
      } else {
        res.status(400).json({ status: false, message: "INVALID USERNAME OR PASSWORD!" });
      }
    })
}