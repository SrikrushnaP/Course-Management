const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema
const courseSchema = new Schema({
  courseTitle: {
    type: String,
    required: true,
    unique: true
  },
  courseLink: {
    type: String,
    required: true,
    unique: true
  },
  platform: {
    type: String,
    required: true
  },
  courseDescription: {
    type: String,
    required: true,
    unique: true
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false
  },
},
  {
    timestamp: true
  }
)
courseSchema.plugin(uniqueValidator)
module.exports = mongoose.model('course', courseSchema, 'courses')