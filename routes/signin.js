const User = require('../models/userLoginModel');
const UserSession = require('../models/userSession');

module.exports = (app) =>{

// app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
// );
//
// app.get(
//     "/auth/google/callback",
//     passport.authenticate('google'),
//     (req, res) => {
//
//
//         // var token = req.user.token;
//         // console.log(req);
//         // res.status(201).json(req.user);
//         // const categories = await Category.find();
//         // res.jsons(categories)
//         // res.send()
//
//
//         res.redirect('http://localhost:3000/');
//     }
// );
//
// app.get('/api/current_users', (req,res)=>{
//     res.send(req.user)
//
// });
//
// app.get('/api/logout',(req,res)=>{
//     req.logout();
//     res.redirect('http://localhost:3000/')
// });

/*
SIGN UP
*/

app.post('/api/accounts/signup', (req,res,next) => {
  console.log("POST START");
  const { body } = req;
  const { fullName, password } = body;
  let { email } = body;

  console.log('body',body)
  if( !fullName ){
  return res.send({
       success: false,
       message: 'ERROR! NAME SHOULD BE ENTERED'
    });
  }

  if( !email ){
    return res.send({
       success: false,
       message: 'ERROR! EMAIL SHOULD BE ENTERED'
    });
  }

  if( !password ){
    return res.send({
       success: false,
       message: 'ERROR! PASSWORD SHOULD BE ENTERED'
    });
  }
console.log("IM HERE");
  email = email.toLowerCase();

  User.find({
    email: email
  }, (err, previosuser) =>{
    if(err){
      return res.send({
         success: false,
         message: 'ERROR! SERVER ERROR'
      });
    }
    else if(previosuser.length > 0){
      return res.send({
         success: false,
         message: 'ACCOUNT ALREADY EXIST'
      });
    }

      var newUser = new User();

      newUser.email = email;
      newUser.fullName = fullName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err,user) => {
        if(err){
          return res.send({
             success: false,
             message: 'ERROR! SERVER ERROR'
          });
        }
        return res.send({
          success: true,
          message: 'YOU ARE SIGNED UP'
        })
      })
  });


 });

app.post('/api/accounts/signin', (req,res,next) => {
   const { body } = req;
   let { email, password } = body;
   console.log(body);
   if( !email ){
     return res.send({
        success: false,
        message: 'ERROR! EMAIL SHOULD BE ENTERED'
     });
   }

   if( !password ){
     return res.send({
        success: false,
        message: 'ERROR! PASSWORD SHOULD BE ENTERED'
     });
   }

   email = email.toLowerCase();

   User.find({
     email: email
   }, (err, users) => {
      if(err){
        return res.send({
           success: false,
           message: 'ERROR! SERVER ERROR'
        });
      }
      if(users.length != 1){
        return res.send({
           success: false,
           message: 'ERROR! NOT SIGNED UP'
        });
      }

      const user = users[0];
      if(!user.validPassword(password)){
        return res.send({
           success: false,
           message: 'ERROR! INVAID PASSWORD'
        });
      }


      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if(err) {
          return res.send({
             success: false,
             message: 'ERROR! SERVER ERROR'
          });
        }
        return res.send({
          success: true,
          message: "VALID SIGNIN",
          token: doc._id
        });
      });
   });

});

app.post('/api/accounts/verify', (req,res,next) => {
    const { query } = req;
    const { token } = query;

    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if(err){
        return res.send({
          success: false,
          message: "ERROR! SERVER ERROR"
        });
      }

      if(sessions.length != 1){
        return res.send({
          success: false,
          message: "ERROR! INVALID"
        });
      }  else{
          return res.send({
            success: true,
            message: "ALL GOOD"
          });
        }
    })
});

app.post('/api/accounts/logout', (req,res,next) => {
  const { query } = req;
  const { token } = query;

  console.log(token);
  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
    $set:
    {
      isDeleted: true
    }
  }, null, (err, sessions) => {
    if(err){
      console.log(err);
      return res.send({
        success: false,
        message: "ERROR! SERVER ERROR"
      });
    }
    return res.send({
          success: true,
          message: "ALL GOOD"
        });

  });

});

}
