var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var title = "Contact the Artist";
var validator = require('validator');
var userErr;
var name, email, subject, text;


router.get('/', function(req, res) {
   res.render('contact', {submit_action: '/contact/submit', title: title, sendMsg: false});
 });


// The user name and password need to be set
router.post('/submit', function(req, res) {
  name=validator.toString(req.body.contact_name);
  email=validator.toString(req.body.contact_email);
  subject=validator.toString(req.body.contact_subject);
  text=validator.toString(req.body.contact_text);

  if(validator.isEmail(email)===false){
      res.render('contact', { title: title, msg: 'Message not sent. Please supply a valid email address.', err: true, page: 'contact', sendMsg: true});
        return;
    } else if (validator.isNull(email) || validator.isNull(name) || validator.isNull(subject) || validator.isNull(text)) {
      res.render('contact', { title: title, msg: 'Message not sent. All the fields must be filled.', err: true, page: 'contact', sendMsg: true});
      return;}
  var mailOpts, transporter;
     transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      // user: REPLACE WITH ACCOUNT IN QUOTES,
      // pass: REPLACE WITH PASSWORD IN QUOTES
    }
  });

  mailOpts = {
    from: name + ' &lt;' + email + '&gt;',
    // to: REPLACE WITH DESTINATION ADDRESS IN QUOTES,
    subject: 'PepperCooper.com: ' + subject,
    text: 'Message from ' + name + ' at ' + email + ': ' + text
  };

  transporter.sendMail(mailOpts, function(err, response){
    if (err) {
      console.log(err);
     res.render('contact', { title: title, msg: 'Error occured, message not sent.', err: true, page: 'contact', sendMsg: true})
    } else {
    res.render('contact', { title: title, msg: 'Message sent! Carol Pepper-Cooper will get back to you soon. Thank you!', err: false, page: 'contact', sendMsg: true })
      }
  });
});




module.exports = router;