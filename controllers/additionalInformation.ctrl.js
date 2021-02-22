const { response } = require('express');
const AdditionalInformation = require('../Models/additionalInformation');

exports.additionalInformationDBController = {
    getInformation(req, res) {
        AdditionalInformation.findOne({googleID: req.params.id})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    async addInformation(req, res) {
        const newInformation = new AdditionalInformation({
            "googleID": req.body.googleID,
            "Gender": req.body.Gender,
            "Phone": req.body.Phone,
            "Age": req.body.Age,
            "Country": req.body.Country,
            "IsRenter": false,
            "IsOwner": false
        });

        newInformation.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    updateInformation(req, res) {
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
        AdditionalInformation.updateOne({ googleId: req.params.id } , update)
            .then(() => res.json(update))
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
};


