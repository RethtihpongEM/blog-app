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
      if(err || foundUser.firstName !== decoded.firstName) return res.sendStatus(403);
      const accessToken = jwt.sign(
        {"firstName": decoded.firstName},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '30s'}
      );
      res.json({accessToken})
    }
  )
};

module.exports = { handleRefreshToken }
