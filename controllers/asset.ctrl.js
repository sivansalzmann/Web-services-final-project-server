const { query } = require('express');
const Asset = require('../Models/asset');
const mongoose = require('mongoose');

//const axios = require('axios');

let assetID = 250;
let data;
exports.assetDBController = {
    getAssets(req, res) {
        if (req.query.City) {
            Asset.find({ City: `${req.query.City}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));

        }

        else if (req.query.Street) {
            Asset.find({ Street: `${req.query.Street}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Zip) {
            Asset.find({ Zip: `${req.query.Zip}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Country) {
            Asset.find({ Country: `${req.query.Country}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Neighborhood) {
            Asset.find({ Neighborhood: `${req.query.Neighborhood}` })
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

        else if (req.query.AppartmentWant) {
            Asset.find({ AppartmentWant: `${req.query.AppartmentWant}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else {
            Asset.find({})
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }
    },

    getAsset(req, res) {
        Asset.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    addAsset(req, res) {
        ++assetID;
        const newAsset = new Asset({
            "id": assetID,
            //"_id": mongoose.Types.ObjectId(),
            "City": req.body.City,
            "Street": req.body.Street,
            "Zip": req.body.Zip,
            "Country": req.body.Country,
            "Neighborhood": req.body.Neighborhood,
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
            "AppartmentWant":req.body.AppartmentWant
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