const { query } = require('express');
const Renter = require('../Models/renter');
const Asset = require('../Models/asset');

exports.renterDBController = {

    getRenters(req, res) {
        if (req.query.FirstName) {
            Renter.find({ FirstName: `${req.query.FirstName}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.LastName) {
            Renter.find({ LastName: `${req.query.LastName}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Gender) {
            Renter.find({ Gender: `${req.query.Gender}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Phone) {
            Renter.find({ Phone: `${req.query.Phone}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Email) {
            Renter.find({ Email: `${req.query.Email}` })
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

        else if (req.query.Asset) {
            Renter.find({ Asset: `${req.query.Asset}` })
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
        Renter.findOne({ Id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addRenter(req, res) {
        const temp = await Renter.findOne({}).sort({ _id: -1 }).limit(1);
        let id = temp.id;
        const newRenter = new Renter({
            "id": id + 1,
            "FirstName": req.body.FirstName,
            "LastName": req.body.LastName,
            "Gender": req.body.Gender,
            "Phone": req.body.Phone,
            "Email": req.body.Email,
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

