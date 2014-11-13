var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/art-portfolio');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));