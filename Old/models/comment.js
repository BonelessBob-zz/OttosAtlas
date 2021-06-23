const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  website: String,
  author: String,
  text: String
});

module.exports = mongoose.model("Comment", commentSchema);
