const { response } = require('express');
const RenterDeatils = require('../Models/renterDeatils');
const { userDBController } = require('./user.ctrl');

exports.renterDeatilsDBController = {

    getRenterDeatils(req, res) {
        RenterDeatils.findOne({ RenterId: req.params.RenterId })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    async addRenterDeatils(req, res) {
        console.log("heree")
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
        if (body.JobTitle != "") {
            update.JobTitle = body.JobTitle
        }
        if (body.Budget != "") {
            update.Budget = body.Budget
        }
        if (body.FavoriteCountry != "") {
            update.FavoriteCountry = body.FavoriteCountry
        }
        RenterDeatils.updateOne({ id: parseInt(req.params.id) }, update)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        

    }

};


