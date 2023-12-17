const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  //Check if the email exists
  const foundUser = await User.findOne({ email: email }).exec();
  if (!foundUser) {
    return res.status(401).json({
      message: "Incorrect email or password.",
    });
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    //JWT
    const accessToken = jwt.sign(
      { "username": foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '900s' }
    );

    const refreshToken = jwt.sign(
      { "username": foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d'}
    );

    //add refresh token to user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });


    res.json({accessToken})

    // res.json({
    //   message: `Login Success. User ${foundUser.firstName} ${foundUser.lastName} is logged in.`,
    // });
  } else {
    res.status(401).json({
      message: "Incorrect email or password.",
    });
  }
};

module.exports = { handleLogin };
