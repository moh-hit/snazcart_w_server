var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var Schema = mongoose.Schema;

var userLoginSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  isDeleted:{
    type: Boolean,
    default: false
  }
});

userLoginSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

userLoginSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model("userLogin", userLoginSchema);

module.exports = User;
