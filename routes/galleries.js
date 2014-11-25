var express = require('express');
var router = express.Router();
var giclee = "Archival giclée prints available";

router.get('/landscapes', function(req, res) {
  res.render('landscapes', { title: 'Landscapes', glicee: giclee});
});

router.get('/mindscapes-dreams', function(req, res) {
  res.render('mindscapes-dreams', { title: 'Mindscapes & Dreams', glicee: giclee});
});

router.get('/non-objective-drawings', function(req, res) {
  res.render('non-objective-drawings', { title: 'Non-objective Drawings', glicee: giclee});
});

router.get('/persons-interiors', function(req, res) {
  res.render('persons-interiors', { title: 'Persons & Interiors', glicee: giclee});
});

router.get('/judaica', function(req, res) {
  res.render('judaica', { title: 'Judaica', glicee: giclee});
});






module.exports = router;
