const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const Comment     = require('./models/comment');
const Meme        = require('./models/meme');
const seedMemeDB  = require('./memeSeeds')

seedMemeDB.seedMemeDB();
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/ottosAtlas", {useNewUrlParser: true});

// LANDING PAGE
app.get("/", function(req, res) {
  res.render("landing");
});


// ----------------MEMEDB ------------------------
// INDEX - lists all memes
app.get("/memes", function(req, res) {
  Meme.find({}, function(err, memes) {
    if (err) {
      console.log(err);
    }else {
      res.render("memes", {memes: memes});
    }
  });
});

// CREATE - creates new meme
app.post("/memes", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newMeme = {name: name, image: image, description: description};
  Meme.create(newMeme, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    }else {
      res.redirect("/memes");
    }
  });
});

// NEW - form to create new meme
app.get("/memes/new", function(req, res) {
  res.render("new");
});

// SHOW - shows more info about one meme
app.get("/memes/:id", function(req, res) {
  Meme.findById(req.params.id).populate("comments").exec(function(err, foundMeme) {
    if (err) {
      console.log(err);
    }else {
      res.render("show", {meme: foundMeme});
    }
  });
});





//---------------------------------NED MED TRAPPENE---------------------------------------
app.get("/nmt", function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err) {
      console.log(err);
    }else {
      comments.reverse();
      res.render("index", {comments: comments});
    }
  });
});

app.post("/nmt", function(req, res) {

  var author = req.body.author;
  var text = req.body.text;

  var newComment = {author: author, text: text};

  Comment.create(newComment, function(err, data) {
    if (err) {
      console.log(err);
    }else {
      console.log(data);
      res.redirect("/nmt");

    }
  });
});

app.listen(5001, "localhost", function() {
  console.log("It has begun!");
});
