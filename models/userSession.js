var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSessionSchema = new Schema({
  userId :{
    type: String,
    default: '' 
  },
  timestamp:{
    type: Date,
    default: Date.now()
  },
  isDeleted:{
    type: Boolean,
    default: false
  }


});

var User = mongoose.model('userSession', userSessionSchema);

module.exports = User;
