const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    require:true
  },
  lastName: {
    type: String,
    require:true
  },
  username: String,
  email: {
    type: String,
    require:true
  },
  password: {
    type: String,
    require:true
  },
  refreshToken: String
})

module.exports = mongoose.model('User',userSchema)