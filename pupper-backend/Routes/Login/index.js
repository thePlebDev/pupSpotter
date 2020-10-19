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

// THIS WILL GET UPDATED LATER 
//NEED TO SETUP THE WEBSITE FIRST IN ORDER TO DO THE DOMAIN AUTHENTICATION FOR SENDGRID
loginRouter.post('/forgot', function(req, res, next) {
    res.json({message:'User not found',status:201})
  // async.waterfall([
  //   function(done) {
  //     crypto.randomBytes(20, function(err, buf) {
  //       var token = buf.toString('hex'); //generates token
  //       done(err, token); //gives token to next function
  //     });
  //   },
  //   function(token, done) {
  //     User.findOne({ email: req.body.email }, function(err, user) { //looks up user by email
  //       if (!user) {
  //         req.json({status:401,message:"no user found with that username"})
  //       }
  //
  //       user.resetPasswordToken = token; // this is equal to the randomly generated token from above
  //       user.resetPasswordExpires = Date.now() + 3600000; // 1 hour . making sure the reset link will only be active for one hour
  //
  //       user.save(function(err) {
  //         done(err, token, user);
  //       });
  //     });
  //   },
  //   function(token, user, done) {
  //     //we are sending our e-mail with Nodemailer and SendGrid
  //     var smtpTransport = nodemailer.createTransport({
  //       service: 'SendGrid',
  //       auth: {
  //         user: '',
  //         pass: ''
  //       }
  //     });
  //     var mailOptions = {
  //       to: user.email,
  //       from: 'passwordreset@demo.com',
  //       subject: 'Node.js Password Reset',
  //       text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
  //         'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
  //         'http://' + req.headers.host + '/reset/' + token + '\n\n' +
  //         'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  //     };
  //     smtpTransport.sendMail(mailOptions, function(err) {
  //       res.json({message:'An e-mail has been sent with further instructions.'});
  //       done(err, 'done');
  //     });
  //   }
  // ], function(err) {
  //   if (err) return next(err);
  //   res.redirect('/forgot');
  // });
});


module.exports = loginRouter
