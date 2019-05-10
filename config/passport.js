var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../server/models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    console.log(email);
    // When a user tries to sign in this code runs
    db.User.findOne({ email: email }, (err, user) => {
      console.log("Getting here");
      if(err){
        return done(err);
      }
      // If there's no user with the given email
      if (!user) {
        console.log("No user");
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, user);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser( (user, done) => {
  done(null, {_id: user._id});
});

passport.deserializeUser( (id, done) => {
  db.User.findOne({ _id: id }, 'email', (err, user) => {
    done(null, user);
  });
});

// Exporting our configured passport
module.exports = passport;
