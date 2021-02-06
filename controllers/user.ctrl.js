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
            "FirstName": req.body.FirstName,
            "LastName": req.body.LastName,
            "Gender": req.body.Gender,
            "Phone": req.body.Phone,
            "Email": req.body.Email,
            "JobTitle": req.body.JobTitle,
            "Budget": req.body.Budget,
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
        if (body.Email != "") {
            update.Email = body.Email
        }
        if (body.Phone != "") {
            update.Phone = body.Phone
        }
        User.updateOne({ id: parseInt(req.params.id) }, update)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    deleteUser(req, res) {
        User.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
};


