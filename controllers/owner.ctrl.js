const { query } = require('express');
const Owner = require('../Models/owner');


exports.ownerDBController = {

    getOwners(req, res) {
        Owner.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

        // if (req.query.personalDeatils) {
        //     Owner.find({ personalDeatils: `${req.query.personalDeatils}` })
        //         .then(docs => { res.json(docs) })
        //         .catch(err => console.log(`Error getting the data from DB: ${err}`));

        // }

        // else if (req.query.Assets) {
        //     Owner.find({ Assets: `${req.query.Assets}` })
        //         .then(docs => { res.json(docs) })
        //         .catch(err => console.log(`Error getting the data from DB: ${err}`));
        // }
        
  
        // else {
        //     Owner.find({})
        //         .then(docs => { res.json(docs) })
        //         .catch(err => console.log(`Error getting the data from DB: ${err}`));
        // }
    },

    getowner(req, res) {
        Owner.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    getownerAssets(req, res) {
        Owner.findOne({ Assets: parseInt(req.params.Assets) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addOwner(req, res) {
        const temp = await Owner.findOne({}).sort({ _id: -1 }).limit(1);
        const id = temp.Owner.id;
        const newOwner = new Owner({
            "id": id + 1,
            "personalDeatils": {
                "first_name": req.body.first_name,
                "last_name": req.body.last_name,
                "gender": req.body.gender,
                "Phone": req.body.Phone,
                "Email": req.body.Email
            },
            "Asset": [],
        });
        newOwner.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateOwner(req, res) {
        Owner.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        
    },
    
    deleteOwner(req, res) {
        Owner.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
};

