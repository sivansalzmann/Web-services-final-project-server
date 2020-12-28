const { query } = require('express');
const Renter = require('../Models/renter');

exports.renterDBController = {

    getRenters(req, res) {
        if (req.query.personalDeatils) {
            Renter.find({ personalDeatils: `${req.query.personalDeatils}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.JobTitle) {
            Renter.find({ JobTitle: `${req.query.JobTitle}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Budget) {
            Renter.find({ Budget: `${req.query.Budget}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Assets) {
            Renter.find({ Assets: `${req.query.Assets}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

                    
        else{
            Renter.find({})
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }
    },

    getRenter(req, res) {
        Renter.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addRenter(req, res) {
        const temp = await Renter.findOne({}).sort({ _id: -1 }).limit(1);
        const id = temp.Renter.id;
        const newRenter = new Renter({
            "id": id + 1,
            "personalDeatils": {
                "first_name": req.query.first_name,
                "last_name": req.query.last_name,
                "gender": req.query.gender,
                "Phone": req.query.Phone,
                "Email": req.query.Email
            },
            "JobTitle": req.query.JobTitle,
            "Budget": req.query.Budget,
            "Assets": req.query.Assets
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

