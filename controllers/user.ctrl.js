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
<<<<<<< Updated upstream
    async addUser(user,req, res) {
        const temp = await User.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newUser = new User({
            "id": id + 1,
            "googleID": user.id,
            "FirstName": user.FirstName,
            "LastName": user.LastName,
            "Email": user.Email,
            "ImageUrl": user.ImageUrl,
            "Gender": "Male",
            "Phone": "123456",
            "Age": 100,
            "Country": "USA"
        });

        newUser.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
=======
    async addUser(token,req, res) {
        // const user = new User();

        // console.log( token['f_name'])
        // user.googleID = token['id']
        // user.FirstName = token['f_name']
        // user.LastName = token['l_name']
        // user.Email = token['email']
        // user.ImgUrl = token['avatar']
      const temp = await User.findOne({}).sort({ id: -1 }).limit(1);
      let id = temp.id;

      const newUser = new User({
          "googleID": token['id'],
          "id": id + 1,
          "FirstName": token['f_name'],
          "LastName": token['l_name'],
          // "Gender": req.body.Gender,
          // "Phone": req.body.Phone,
          "Email": token['email'],
          "ImgUrl": token['avatar']
      });

      // newUser.save()
      //     .then(docs => { res.json(docs) })
      //     .catch(err => console.log(`Error getting the data from DB: ${err}`));
      newUser.save()
      .then(() => {
          User.findOne({googleID: token['id']})
              .then(docs => {
                  res.cookie('user', docs)
                  res.json(docs)
              })
              .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
>>>>>>> Stashed changes

    },
    updateUser(req, res) {
        const {body} = req
        const update = {}
        if (body.Country != "") {
            update.Country = body.Country
        }
        // if (body.Email != "") {
        //     update.Email = user.Email
        // }
        if (body.Phone != "") {
            update.Phone = body.Phone
        }
        if (body.Age != "") {
            update.Age = body.Age
        }
        if (body.Gender != "") {
            update.Gender = body.Gender
        }
        User.updateOne({ id: parseInt(req.params.id) } , update)
            .then(() => res.json(body))
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


