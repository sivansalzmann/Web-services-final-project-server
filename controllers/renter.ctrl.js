const { query } = require('express');
const Renter = require('../Models/renter');


let renterID = 250;
let data;
exports.renterDBController = {

    getRenters(req, res) {
        if (req.query.first_name) {
            Renter.find({ first_name: `${req.query.first_name}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.last_name) {
            Renter.find({ last_name: `${req.query.last_name}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.gender) {
            Renter.find({ gender: `${req.query.gender}` })
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

        else if (req.query.Apparts) {
            Renter.find({ Apparts: `${req.query.Apparts}` })
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

    addRenter(req, res) {
        ++renterID;
        const newRenter = new Renter({
            "id": renterID,
            "first_name": req.query.first_name,
            "last_name": req.query.last_name,
            "gender": req.query.gender,
            "Phone": req.query.Phone,
            "Email": req.query.Email,
            "JobTitle": req.query.JobTitle,
            "Budget": req.query.Budget,
            "Apparts": req.query.Apparts
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

