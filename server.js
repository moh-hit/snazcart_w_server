const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const categoriesRouter = require('./routes/categories');
const bodyParser = require('body-parser')

require('./models/userModel');

require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('CONNECTED TO DB SNAZ');
});
app.use(bodyParser());


require('./routes/signin')(app);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
app.use('/categories', categoriesRouter);
app.listen(PORT, () => {
  console.log('SERVER RUNNING ON PORT ' + PORT);
});
