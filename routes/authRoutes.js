var passport = require("passport");


module.exports = (app) =>{
/* GET home page. */
app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        });
    }
});

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
        // res.json(categories)
        // res.send()
       
        
        res.redirect("/");
    }
);

app.get('/current_user', (req,res)=>{
    res.send(req.user)
});

app.get('/api/logout',(req,res)=>{
    res.logout();
    res.send(req.user)
});
}





