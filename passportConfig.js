const User = require("./Models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const passport = require("passport");

module.exports = function (passport) {
  passport.use (
    new localStrategy((username, password, done) => {
      // Match user
      User.findOne({ username: username }, (err, user) => {
        if (err) console.log('ERROR!');/* throw err; */
        if (!user) /* console.log('Did not found the user'); */return done(null, false,{message: "The username is not found"});
        // Match passwords
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) console.log('Another error!');/* throw err; */
          if (result === true) {
            console.log('Done 1');
            return done(null, user);
          } else {
            console.log('done 222');
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    console.log("in serialize", user);
    // cb(null, user._id);
    done(null,user.id);
    console.log("in serialize2");
  });
  passport.deserializeUser((_id, cb) => {
    console.log("in" ,_id);
    User.findOne({ _id: _id }, (err, user) => {
      const userInformation = {
        username: user.name,
      };
      cb(err, userInformation);
    });
  });
};