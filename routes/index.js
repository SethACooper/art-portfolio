var express = require('express');
var router = express.Router();
var title = 'Carol Pepper-Cooper';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: title });
});

module.exports = router;
