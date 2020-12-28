// const { query } = require('express');
const { Asset } = require('../Models/asset');
const Owner = require('../Models/owner');
const Renter = require('../Models/renter');
const personalDeatils = require('../Models/personalDetails');

exports.assetDBController = {

    getAssets(req, res) {
        if (req.query.Adress) {
            Asset.find({ CAdressity: `${req.query.Adress}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));

        }

        else if (req.query.Rooms) {
            Asset.find({ Rooms: `${req.query.Rooms}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.SquareFeet) {
            Asset.find({ SquareFeet: `${req.query.SquareFeet}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Floors) {
            Asset.find({ Floors: `${req.query.Floors}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Parking) {
            Asset.find({ Parking: `${req.query.Parking}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Elevator) {
            Asset.find({ Elevator: `${req.query.Elevator}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.PetsAllowed) {
            Asset.find({ PetsAllowed: `${req.query.PetsAllowed}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Condition) {
            Asset.find({ Condition: `${req.query.Condition}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Price) {
            Asset.find({ Price: `${req.query.Price}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Avilability) {
            Asset.find({ Avilability: `${req.query.Avilability}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Description) {
            Asset.find({ Description: `${req.query.Description}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Want) {
            Asset.find({ Want: `${req.query.Want}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else {
        Asset.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }
        // getAssets(req, res) {
        //     let filter = {}
        //     if('id' in req.query)
        //         filter.id = req.query.id;
        //     Asset.find(filter)
        //         .then(docs => { res.json(docs) })
        //         .catch(err => {
        //             res.status(500).json(`Error getting assets`);
        //             console.log(`Error getting assets ${err}`)
        //         })
        // },
    },

    getAsset(req, res) {
        Asset.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addAsset(req, res) {
        //++assetID;
        const temp = await Asset.findOne({}).sort({_id:-1}).limit(1);
        let id = temp.id;
        const newAsset = new Asset({
            "id": id+1,
            "Adress" : {
                "City": req.body.City,
                "Street": req.body.Street,
                "Zip": req.body.Zip,
                "Country": req.body.Country,
                "Neighborhood": req.body.Neighborhood
            },
            "Rooms": req.body.Rooms,
            "SquareFeet": req.body.SquareFeet,
            "Floors": req.body.Floors,
            "Parking": req.body.Parking,
            "Elevator": req.body.Elevator,
            "PetsAllowed": req.body.PetsAllowed,
            "Condition": req.body.Condition,
            "Price": req.body.Price,
            "Avilability": req.body.Avilability,
            "Discription":req.body.Discription,
            "Want":req.body.AppartmentWant
        });

        newAsset.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateAsset(req, res) {

        Asset.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    deleteAsset(req, res) {
        Asset.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

};