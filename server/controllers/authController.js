const User = require("../model/User")
const bcrypt = require("bcrypt")

const handleLogin = async (req,res) => {
  const {email,password} = req.body

  //Check if the email exists
  const foundUser = await User.findOne({email: email}).exec()
  if(!foundUser){
    return res.status(401).json({
      message: "Incorrect email or password."
    })
  }

  const match = await bcrypt.compare(password,foundUser.password);

  if(match){
    res.json({
      message: `Login Success. User ${foundUser.firstName} ${foundUser.lastName} is logged in.`
    })
  }else{
    res.status(401).json({
      message: "Incorrect email or password."
    })
  }
}

module.exports = {handleLogin}