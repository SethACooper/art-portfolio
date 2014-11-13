var express = require('express');
var router = express.Router();
var title = "Galleries: "

router.get('/landscapes', function(req, res) {
  res.render('landscapes', { title: title + 'Landscapes'});
});

router.get('/mindscapes-dreams', function(req, res) {
  res.render('mindscapes-dreams', { title: title + 'Mindscapes & Dreams'});
});

router.get('/non-objective-drawings', function(req, res) {
  res.render('non-objective-drawings', { title: title + 'non-objective-drawings'});
});

router.get('/persons-interiors', function(req, res) {
  res.render('persons-interiors', { title: title + 'Persons & Interiors'});
});


router.get('/judaica', function(req, res) {
  res.render('judaica', { title: title + 'Judaica'});
});




module.exports = router;
