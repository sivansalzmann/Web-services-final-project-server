const { response } = require('express');
const User = require('../Models/user');
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { rawListeners } = require('../Models/user');

// Getting user by username and email from google api and checking if it is in the DB.
// async function getUserToGoogle(name, email) {
//     let user = await User.findOne({ username:name ,email: email})
//     return user;
//   }

exports.userDBController = {
    // getUserToGoogle,
    getUsers(req, res) {
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    
    },
    getUser(req, res) {
        User.findOne({googleID: req.params.id})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    async addUser(user,req, res) {
        console.log("here")
        const temp = await User.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newUser = new User({
            "id": id + 1,
            "googleID": user.id,
            "FirstName": user.FirstName,
            "LastName": user.LastName,
            "Email": user.Email,
            "ImageUrl": user.ImageUrl,
            "Gender": req.body.Gender,
            "Phone": req.body.Phone,
            "Age": req.body.Age,
            "Country": req.body.Country,
            "IsRenter": false,
            "IsOwner": false
        });

        newUser.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    updateUser(req, res) {
        const {body} = req
        const update = {}
        if (body.Country != "") {
            update.Country = body.Country
        }
        if (body.Phone != "") {
            update.Phone = body.Phone
        }
        if (body.Age != "") {
            update.Age = body.Age
        }
        if (body.Gender != "") {
            update.Gender = body.Gender
        }
        if (body.IsRenter != "") {
            update.IsRenter = body.IsRenter
        }
        if (body.IsOwner != "") {
            update.IsOwner = body.IsOwner
        }
        User.updateOne({ googleId: req.params.id } , update)
            .then(() => res.json(update))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    deleteUser(req, res) {
        User.findOneAndDelete({googleID: req.params.id})
            .then(() => res.json({googleID: `${req.params.id}`}))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    userLogin(req, res, next) {
        console.log("In userLogin");
        passport.authenticate('local', (err, user, info) => {
            console.log("After passport.authenticate");
            if (err) next(new Error('AuthenticationError'), req, res);
            if (!user) {
                console.log("No user exist");
            }
            else {
              req.logIn(user, (err) => {
                if (err) console.log("ERROR!" , err);
                res.send("Successfully Authenticated");
                console.log(req.user);
              });
            }
          })(req, res, next);
    },
    
    userLogout(req, res) {
        req.logout();
        res.send({msg: "User logged-out"});
    },

    userRegister(req, res) {
        User.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send({msg: "User Already Exists"});
            if (!doc) {
              const hashedPassword = await bcrypt.hash(req.body.password, 10);
              const obj = await new Promise((resolve, reject) => {
                const obj = User.findOne({}).sort({ _id: -1 }).limit(1)
                resolve(obj);
              });
            const newId = obj.id + 1;
              const newUser = new User({
                id: newId,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
              });
              await newUser.save();
              res.send("User Created");
            }
          });
    }
};


