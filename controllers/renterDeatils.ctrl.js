const { response } = require('express');
const RenterDeatils = require('../Models/renterDeatils');

exports.renterDeatilsDBController = {

    getRenterDeatils(req, res) {
        RenterDeatils.findOne({ RenterId: req.params.RenterId })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
    async addRenterDeatils(req, res) {
        const temp = await User.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newRenterDeatils = new RenterDeatils({
            "id": id + 1,
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
        RenterDeatils.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },
};


