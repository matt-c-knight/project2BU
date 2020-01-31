
var path = require("path");


module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  


  app.get("/feed", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/feed.html"));
  });


  app.get("/tag", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tag.html"));
  });

};
