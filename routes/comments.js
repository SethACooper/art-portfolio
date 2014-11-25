var express = require('express');
var router = express.Router();
var models = require('../models');
var validator = require('validator');
var title="Comments";
var name, subject, text;

router.get('/', function(req, res) {
  models.Comment.find(function(err, comments){
   res.render('comments', {submit_action: '/comments/submit', title: title, comments:comments});
  });
});


router.post('/submit', function(req, res) {
  name = validator.toString(req.body.comment_name);
  subject = validator.toString(req.body.comment_subject);
  text = validator.toString(req.body.comment_text);

  if (validator.isNull(name) || validator.isNull(subject) || validator.isNull(text)) {
      res.render('comments', { title: title, msg: 'Comment not posted. All the fields must be filled.', err: true, page: 'comments', sendMsg: true});
      return;}

  var comment = new models.Comment({"name": name, "subject": subject,"text": text});
  comment.save();
  res.redirect('/comments');
});

module.exports = router;