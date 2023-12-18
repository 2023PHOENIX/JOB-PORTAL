const User = require("../model/User");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const hashPassword = async (password) => {
  const saltedPassword = await bcrypt.hash(password, 10);
  return saltedPassword;
};

const comparePassword = async (password, hashPassword) => {
  const response = await bcrypt.compare(password, hashPassword);
  return response;
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const repsonse = await comparePassword(password, user.password); // & successfully verify your password
      if (repsonse) {
        const token = await jsonwebtoken.sign(
          { email },
          process.env.jwtPrivateKey,
          { expiresIn: "1d" },
        );
        // console.log(token);
        res.status(200).json({ token: token, username: user.name });
      } else {
        res.status(401).json({ message: "your password is incorrect" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log("problem find");
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  const { email, password, mobile, name } = req.body;

  try {
    const saltedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      password: saltedPassword,
      mobile,
    });
    const response = await newUser.save();

    if (response) {
      res.status(201).json({ message: "user created successfully" });
    } else {
      res.status(500).json({
        message: "something went wrong please try again after some time.",
      });
    }
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

module.exports = {
  loginUser,
  registerUser,
};
