const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session');
const passport = require('./config/passport');
const apiroutes = require ('./server/routes/api/api-routes');
const dbConnection = require('./config/database');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.urlencoded({
  extended:false
}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser
//sessions
app.use(
  session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  store: new MongoStore({ mongooseConnection: dbConnection}),
  resave: false, //required
  saveUninitialized: false //required
  })
)
app.use('/api' , apiroutes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
