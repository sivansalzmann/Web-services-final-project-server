const { query } = require('express');
const Owner = require('../Models/owner');
const Asset = require('../Models/asset');


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
            "Assets": []
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
    },

    // updateAssetsByOwnerId(req, res) {
    //     Owner.findById(2) 
    //         .then((Asset) => {
    //             const asset = Owner.Assets.id(2); // returns a matching subdocument
    //             Owner.set(req.body); // updates the address while keeping its schema       
    //             // address.zipCode = req.body.zipCode; // individual fields can be set directly
            
    //             return Owner.save(); // saves document with subdocuments and triggers validation
    //         })
    //         .then((Owner) => {
    //             res.send({ Owner });
    //         })
    //         .catch(e => res.status(400).send(e));
    // }
};

