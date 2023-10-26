const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../model/User");

const handleNewUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //find duplicate email
  if (await User.findOne({ email: email }).exec()) {
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
      email,
      password: hashedPwd,
    });
    console.log(result);
    res.status(201).json({
      message: `New user ${firstName} ${lastName} has been registerd.`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
