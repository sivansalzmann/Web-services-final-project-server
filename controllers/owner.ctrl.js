const { query } = require('express');
const Owner = require('../Models/owner');


exports.ownerDBController = {

    getOwners(req, res) {

        if (req.query.FirstName) {
            Owner.find({ FirstName: `${req.query.FirstName}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.LastName) {
            Owner.find({ LastName: `${req.query.LastName}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Gender) {
            Owner.find({ Gender: `${req.query.Gender}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Phone) {
            Owner.find({ Phone: `${req.query.Phone}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Email) {
            Owner.find({ Email: `${req.query.Email}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Assets) {
            Owner.find({ Assets: `${req.query.Assets}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else {
            Owner.find({})
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }
    },

    getowner(req, res) {
        Owner.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    getAssets(req, res) {
        console.log("ok");
        Owner.findOne({document: ['Assets']})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },


    async addOwner(req, res) {
        const temp = await Owner.findOne({}).sort({ _id: -1 }).limit(1);
        let id = temp.id;
        const newOwner = new Owner({
            "id": id + 1,
            "FirstName": req.body.FirstName,
            "LastName": req.body.LastName,
            "Gender": req.body.Gender,
            "Phone": req.body.Phone,
            "Email": req.body.Email,
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

    addAssetByOwnerId(req, res) {
        Owner.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        
    },
    
    deleteOwner(req, res) {
        Owner.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
};

