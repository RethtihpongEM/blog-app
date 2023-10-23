const User = require("../model/User");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;

  //Check if the email exists
  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }

  //Delete refresh token
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  // console.log(result)

  res.clearCookie("jwt", { httpOnly: true, secure: true });
  res.sendStatus(204);
};

module.exports = { handleLogout };
