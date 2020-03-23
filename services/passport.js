var passport = require("passport");
var User = require('../models/userModel');
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;


module.exports = (passport) => {
passport.serializeUser(function(user, done) {
  console.log("SER"+user.id)
 done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then((user) => {
    console.log("DESER" + user)
    done(null, user);
  })  
});




passport.use(
 new GoogleStrategy(
  {
   clientID: "297168683076-mtitv4aaubmva91ndvkbbbvushhkaccd.apps.googleusercontent.com",
   clientSecret: "lqyHSMeXHQTjpTKJfiFUPK6Q",
   callbackURL: "http://localhost:3005/auth/google/callback",
   proxy:true,
  },
  (accessToken, refreshToken, profile, done) => {
    // var userData = {
    //   email: profile.emails[0].value,
    //   name: profile.displayName,
    //   token: accessToken
    //  };
    //  done(null, userData);

   User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
        done(null, currentUser);
    }
    else{
        new User({
            username: profile.displayName,
            googleId: profile.id,
            mailId: profile.emails[0].value,
            
        }).save().then((newUser) => {
            done(null, newUser);
        });
    }
   })

  }
 )
)
};