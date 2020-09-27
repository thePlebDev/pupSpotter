const express = require('express')
const passport = require('passport')
const async = require('async')
const nodemailer = require('nodemailer')
const crypto = require('crypto');
const User = require('../../Models/User')

const loginRouter = express.Router()

loginRouter.post("/login",passport.authenticate('login'), //authenticate pulls out username and password automatically.
  function(req,res,next){ // this gets called on a successful login
      res.json({
        status:200,
        message:'Login successful n stuff'
      })
  }
)

loginRouter.get('/logout', function(req, res,next){
  try{
    req.logout();
    req.session.destroy(function(err){
      if(err) return next(err)
      res.json({
        status:200,
        message:'user logged out'
      })
    })
  }
  catch(error){
    console.log(error)
    next(error)
  }
});

loginRouter.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.json({status:401,message:"no user found with that username"})
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'SendGrid',
        auth: {
          user: '!!! YOUR SENDGRID USERNAME !!!',
          pass: '!!! YOUR SENDGRID PASSWORD !!!'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});


module.exports = loginRouter
