var db = require("../models");

module.exports = function(app) {

app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

app.get("/api/users", function(req, res) {
  console.log(req.body)
  db.User.findAll({}).then(function(dbUser) {
    console.log(dbUser)
    res.send(dbUser);
   
  });
});

};
