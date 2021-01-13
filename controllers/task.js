const Task = require('../models/Tasks')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
  const query = {
    user: req.user.id
  }

  if (req.query.start) {
    query.date = {
      $gte: req.query.start
    }
  }

  if (req.query.end) {
    if (!query.date) {
      query.date = {}
    }

    query.date['$lte'] = req.query.end
  }

  if (req.query.task) {
    query.task = +req.query.task
  }

  try {
    const tasks = await Task
      .find(query)
      .sort({date: -1})
      .skip(+req.query.offset)
      .limit(+req.query.limit)

    res.status(200).json(tasks)

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
  try {
    const lastTask = await Task
      .findOne({user: req.user.id})
      .sort({date: -1})

    const maxTask = lastTask ? lastTask.task : 0

    const task = await new Task({
      list: req.body.list,
      user: req.user.id,
      task: maxTask + 1
    }).save()

    res.status(201).json(task)
  } catch (e) {
    errorHandler(res, e)
  }
}