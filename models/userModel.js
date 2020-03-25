var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    googleId: String,
    username: String,
    mailId: String,
    picture: String,
    code: String
    

});

var User = mongoose.model('user', userSchema);

module.exports = User;