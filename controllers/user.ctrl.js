const { response } = require('express');
const User = require('../Models/user');

exports.userDBController = {
    getUsers(req, res) {
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    
    },

    getUser(req, res) {
        User.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },


    async addUser(req, res) {
        const temp = await User.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newUser = new User({
            "id": id + 1,
            "FirstName": req.body.Person.FirstName,
            "LastName": req.body.Person.LastName,
            "Gender": req.body.Person.Gender,
            "Phone": req.body.Person.Phone,
            "Email": req.body.Person.Email,
            "JobTitle": req.body.JobTitle,
            "Budget": req.body.Budget,
            "AssetsWishList": req.body.AssetsWishList,
            "Password": req.body.Person.Password
        });

        newUser.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateUser(req, res) {
        User.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    deleteUser(req, res) {
        User.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


};


