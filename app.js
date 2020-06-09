const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
var path          = require('path');
const Comment     = require('./models/comment');
const Meme        = require('./models/meme');
const seedDB      = require('./seeds')

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/ottosAtlas", {useNewUrlParser: true});
//seedDB();



// LANDING PAGE
app.get("/", function(req, res) {
  res.render("landing");
});

//---------------------------------NED MED TRAPPENE---------------------------------------
app.get("/nmt", function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err) {
      console.log(err);
    }else {
      comments.reverse();
      res.render("nmt/index", {comments: comments});
    }
  });
});

// CREATE - creates new comment
app.post("/nmt", function(req, res) {

  var author = req.body.author;
  var text = req.body.text;

  var newComment = {website: "nmt", author: author, text: text};

  Comment.create(newComment, function(err, data) {
    if (err) {
      console.log(err);
    }else {
      console.log(data);
      res.redirect("/nmt");

    }
  });
});

// ----------------MEMEDB ------------------------
// INDEX - lists all memes
app.get("/memes", function(req, res) {
  Meme.find({}, function(err, memes) {
    if (err) {
      console.log(err);
    }else {
      res.render("memeDB/memes", {memes: memes});
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
  res.render("memeDB/new");
});

// SHOW - shows more info about one meme
app.get("/memes/:id", function(req, res) {
  Meme.findById(req.params.id).populate("comments").exec(function(err, foundMeme) {
    if (err) {
      console.log(err);
    }else {
      res.render("memeDB/show", {meme: foundMeme});
    }
  });
});

app.post("/memes/:id", function(req, res) {
  Meme.findById(req.params.id, function(err, foundMeme) {
    if (err) {
      console.log(err);
      res.redirect("/memes");
    }else {
      var website = "memeDB";
      var author = req.body.author;
      var text = req.body.text;
      var newComment = {website: website, author: author, text: text};
      Comment.create(newComment, function(err, createdComment) {
        if (err) {
          console.log(err);
        }else {
          foundMeme.comments.push(createdComment);
          foundMeme.save();
          res.redirect("/memes/" + foundMeme._id);
        }
      });
    }
  });
});

// ------------------------ PHYSICS ------------------------

app.get("/physics", function(req, res) {
  res.render("physics/physics");
});

// ------------------------ 1STFantastisk ------------------------

// Index list
app.get("/1STFantastisk", function(req, res) {
  res.render("1STFantastisk/index");
});

// Beepboop - Zoi etter smakebit kurs i IT2 2020
app.get("/1STFantastisk/beepboop", function(req, res) {
  res.render("1STFantastisk/beepboop");
});

// Carl - Viktoria etter smakebit kurs i IT2 2020
app.get("/1STFantastisk/carl", function(req, res) {
  res.render("1STFantastisk/carl");
});

// Forvirra - Jenna etter smakebit kurs i IT2 2020
app.get("/1STFantastisk/forvirra", function(req, res) {
  res.render("1STFantastisk/forvirra");
});


// app.get("/1STFantastisk", function(req, res) {
//   res.render("physics/physics");
// });
//
//
// app.get("/1STFantastisk", function(req, res) {
//   res.render("physics/physics");
// });

// ------------------------ 404 ------------------------
app.get("/*", function(req,res){
  res.render("404");
})

// ------------------------ START SERVER ------------------------
app.listen(80, process.env.IP, function() {
  console.log("It has begun!");
});
