const mongoose = require('mongoose');

var memeCommentSchema = new mongoose.Schema({
  text: String,
  author: String
});

module.exports = mongoose.model("MemeComment", memeCommentSchema);;
