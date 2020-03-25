var passport = require("passport");


module.exports = (app) =>{
/* GET home page. */


/* GET Google Authentication API. */
app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate('google'),
    (req, res) => {

        
        // var token = req.user.token;
        // console.log(req);
        // res.status(201).json(req.user);
        // const categories = await Category.find();
        // res.jsons(categories)
        // res.send()
       
        
        res.redirect('http://localhost:3000/');
    }
);

app.get('/api/current_users', (req,res)=>{
    res.send(req.user)
    
});

app.get('/api/logout',(req,res)=>{
    req.logout();
    res.redirect('http://localhost:3000/')
});
}





