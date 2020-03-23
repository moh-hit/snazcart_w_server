const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  refer: {
    type: String,
    required: true
  },
  
})

module.exports = mongoose.model('Categories', categorySchema)