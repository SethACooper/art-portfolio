var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/art-portfolio');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));

var Comment;
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  name: String,
  subject: String,
  text: String,
  date:{type: Date, default: Date.now}
});

Comment = mongoose.model('Comment', commentSchema);



module.exports ={"Comment": Comment};