const { response } = require('express');
const {Renter} = require('../Models/person');

exports.renterDBController = {
    getRenter(req, res) {
        Renter.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addRenter(req, res) {
        const temp = await Renter.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newRenter = new Renter({
            "id": id + 1,
            "Person": {
                "FirstName": req.body.Person.FirstName,
                "LastName": req.body.Person.LastName,
                "Gender": req.body.Person.Gender,
                "Phone": req.body.Person.Phone,
                "Email": req.body.Person.Email
            },
            "JobTitle": req.body.JobTitle,
            "Budget": req.body.Budget,
            "Asset": req.body.Asset
        });

        newRenter.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateRenter(req, res) {
        Renter.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    deleteRenter(req, res) {
        Renter.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


};


