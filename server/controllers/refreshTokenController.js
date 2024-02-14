const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {

  const cookies = req.cookies

  if(!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt

  //Check if the email exists
  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();

  if (!foundUser) {
    return res.sendStatus(403);
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if(err || foundUser.username !== decoded.username) return res.sendStatus(403);
      const accessToken = jwt.sign(
        {"username": decoded.username},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '900s'}
      );
      res.json({user:foundUser, accessToken})
    }
  )
};

module.exports = { handleRefreshToken }
