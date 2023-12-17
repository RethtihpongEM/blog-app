const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../model/User");

const handleNewUser = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  //find duplicate email
  if (
    await User.findOne({
      $or: [{ email: email }, { username: username }],
    }).exec()
  ) {
    return res.status(409).json({
      message: "This user is already exists.",
    });
  }

  try {
    //encrypt pwd
    const hashedPwd = await bcrypt.hash(password, saltRounds);

    //store user to db
    const result = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPwd,
    });
    console.log(result);
    res.status(201).json({
      message: `New user ${username} has been registerd.`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
