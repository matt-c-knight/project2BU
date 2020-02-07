var db = require("../models");
const linkPreviewGenerator = require("link-preview-generator");

module.exports = function (app) {

  app.get("/api/posts", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Post.findAll({
      where: query
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });


  app.get("/api/posts/:id", function (req, res) {
    db.Post.findOne({
      where: {
        tagId: req.params.id
      }
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  app.post("/api/posts", function (req, res) {
    // linkPreviewGenerator(req.body.link).then(function (preview) {
    //   req.body.preview = JSON.stringify(preview);
      db.Post.create(req.body).then(function (dbPost) {
        res.json(dbPost);
        console.log("success")
      // });
    });
  });


  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

};
