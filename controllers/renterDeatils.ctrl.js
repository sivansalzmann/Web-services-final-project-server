const { response } = require('express');
const RenterDeatils = require('../Models/renterDeatils');
const { userDBController } = require('./user.ctrl');

exports.renterDeatilsDBController = {

    getRenterDeatils(req, res) {
        RenterDeatils.findOne({ googleID: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    async addRenterDeatils(req, res) {
        const temp = await RenterDeatils.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newRenterDeatils = new RenterDeatils({
            "id": id + 1,
            "googleID" : req.body.googleID,
            "RenterId": req.body.RenterId,
            "JobTitle": req.body.JobTitle,
            "Budget": req.body.Budget,
            "FavoriteCountry": req.body.FavoriteCountry,
        });

        newRenterDeatils.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    updateRenterDeatils(req, res) {
        const {body} = req
        const update = {}
        if (body.JobTitle != "" && body.JobTitle != null) {
            update.JobTitle = body.JobTitle
        }
        if (body.Budget != "" && body.Budget != null) {
            update.Budget = body.Budget
        }
        if (body.FavoriteCountry != "" && body.FavoriteCountry != null) {
            update.FavoriteCountry = body.FavoriteCountry
        }
        RenterDeatils.updateOne({ id: parseInt(req.params.id) }, update)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        

    }

};


