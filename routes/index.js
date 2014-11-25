var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index', { title: 'Carol Pepper-Cooper' });
});

router.get('/statement', function(req, res) {
  res.render('statement', { title: 'About: Statement & Vita' });
});

router.get('/press', function(req, res) {
  res.render('press', { title: 'Press' });
});


module.exports = router;
