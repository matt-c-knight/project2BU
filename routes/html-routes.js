
var path = require("path");


module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  
  app.get("/stack", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stack.html"));
  });

  app.get("/feed", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/feed.html"));
  });

  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });



  app.get("/tags", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tags.html"));
  });

};
