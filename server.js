require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');

var passport = require("passport");
const categoriesRouter = require('./routes/categories')
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
require("./services/passport")(passport);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use('/categories', categoriesRouter)




app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [process.env.session_key]
}))
app.use(passport.initialize());
app.use(passport.session());



require("./routes/authRoutes")(app);
















// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.use(express.static('client/build'))
app.get('*',(req,res)=>{
	res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


app.listen(3005, () => console.log('server started'))