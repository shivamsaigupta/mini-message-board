var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

/* GET new message page. */
router.get("/new", function(req, res, next) {
  res.render("form", { title: "New Message" });
});

/* POST new message page. */
router.post("/new", function(req, res, next) {
  console.log(req);
  if (!(req.body.text.length > 0 && req.body.user.length > 0)) {
    let error = new Error("Invalid input");
    error.status = 404;
    return next(error);
  }
  // Success
  let newMsg = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  };

  messages.push(newMsg);
  res.redirect("/");
});

module.exports = router;
