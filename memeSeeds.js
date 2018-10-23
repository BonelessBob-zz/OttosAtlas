const mongoose = require('mongoose');
const Meme = require('./models/meme');
const Comment = require('./models/comment');

var data = [
  {
    name: "Doot",
    image: "https://i.kym-cdn.com/entries/icons/original/000/011/121/SKULL_TRUMPET_0-1_screenshot.png",
    description: "Doot also known as 'Doot Doot' is an animated sprite image of a skull-faced character playing the trumpet. Due to its poor, outdated quality of graphics, the image has spawned a variety of remixes and parodies in both video and GIF formats on media-sharing YouTube and Tumblr."
  },
  {
    name: "Ugandan Knuckles",
    image: "https://i.kym-cdn.com/photos/images/original/001/329/453/ba0.jpg",
    description: "Ugandan Knuckles is the nickname given to a depiction of the character Knuckles from the Sonic franchise created by YouTuber Gregzilla, which is often used as an avatar by players in the multiplayer game VRChat who repeat phrases like 'do you know the way' and memes associated with the country Uganda, most notably the film Who Killed Captain Alex? and Zulul. The character is associated with the expression 'do you know the way', which is typically spoken in a mock African accent and phonetically spelled as 'do you know de wey.' Along with the question in hand a VR user will start making 'spitting' sounds, followed by a 'mob like' mentality. Unsuspecting VRchat users fall victim to Ugandan Knuckles 'promise' of showing 'de wey'. Only followed by a mass trolling."
  },
  {
    name: "E (Lord Farquaad)",
    image: "https://i.kym-cdn.com/entries/icons/original/000/026/008/Screen_Shot_2018-04-25_at_12.24.22_PM.png",
    description: "Lord Farquaad / Markiplier E refers to a deep fried image of the face YouTube Let’s Player Markiplier photoshopped onto the head of Lord Farquaad from Shrek with the letter “E” in impact font overlaying the image. Later edits posted the face over an image of Mark Zuckerberg’s Congressional Hearings. The character was then edited in several templates referencing the absurdity of modern memes."
  },
  {
    name: "Tide pod challenge",
    image: "http://4.bp.blogspot.com/-MVftjgQbsTQ/T2fh3_Pwl1I/AAAAAAAACAg/NsDFWmGemxc/s1600/110810+-+Tide+Ambrosia+Product+Shot+2.jpg",
    description: "Tide POD Challenge refers to a dare game involving the consumption of Tide PODS laundry detergent capsules, which are often compared to various fruit-flavored snack foods due to their packaging and appearance. Online, the practice of eating Tide PODS is frequently mocked in a similar vein to bleach drinking and the consumption of other poisonous forbidden snacks."
  }
]

exports.seedMemeDB = function () {
  //Delete all memes
  Meme.deleteMany({}, function(err) {
    if (err) {
      console.log(err);
    }else {
      console.log("----------------REMOVED ALL MEMES----------------");
      //Create new memes
      data.forEach(function(seed) {
        Meme.create(seed, function(err, meme) {
          if (err) {
            console.log(err);
          }else {
            console.log("Added meme " + meme["name"]);
          }
        });
      });
    }
  });

};
