const passport =  require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('user')


passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then((user)=>{
        done(null,user)
    })
})


passport.use(
    new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:3005/auth/google/callback'
    },
     (accessToken, refreshToken, profile, done)=>{
        console.log("IN AUTH")

        User.findOne({googleId: profile.id})
        .then((existingUser)=>{
            if(existingUser){
                done(null,existingUser);
                console.log("ALREADY EXIST")
            }
            else{
                const d = profile._json;
                console.log(d)
                new User({googleId: d.sub,username: d.name,mailId: d.email,picture: d.picture}).save()
                .then(()=>{
                    done(null,user)
                });
                console.log("DOESNT EXIST")

            }
        });
        console.log("OUT OF AUTH")

    }
    )

)
