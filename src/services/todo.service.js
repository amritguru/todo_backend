const Todo = require("../models/todoModel");

exports.getAll = () => Todo.find();

exports.create = (data) => Todo.create(data);

exports.update = (id, data) =>
  Todo.findByIdAndUpdate(id, data, { new: true });

exports.remove = (id) => Todo.findByIdAndDelete(id);
