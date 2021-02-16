const { response } = require('express');
const User = require('../Models/user');

exports.userDBController = {
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
};


