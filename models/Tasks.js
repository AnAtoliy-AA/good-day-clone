const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tasksSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  task: {
    type: Number,
    required: true
  },
  list: [
    {
      name: {
        type: String
      },
      assigned: {
        type: String
      },
      required: {
        type: String
      },
      priority: {
        type: String
      },
      deadline: {
        type: String
      },
      status: {
        type: String
      },
      estimate: {
        type: String
      },
      startEnd: {
        type: String
      },
      progress: {
        type: Number
      },
      schedule: {
        type: Date
      }
    },
  ],
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('tasks', tasksSchema)