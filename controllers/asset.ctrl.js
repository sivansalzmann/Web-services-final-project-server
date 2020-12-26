const { query } = require('express');
const Asset = require('../Models/asset');
//const axios = require('axios');

let assetID = 250;
let data;
exports.assetDBController = {
    // getLocation(req, res) {
    //     if(req.query && req.query.City && req.query.State && req.query.Street ) {
    //         //Google maps
    //         axios.get(`https://maps.googleapis.com/maps/api/place/details/assets?${req.query.State}`)
    //         //axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyCBKnpu56Zcj8oMp2iWIrv8ED9VG9Isgrg`)
    //             .then((user) => res.json(user.data))
    //             .catch((err) => res.json(`Errpr: ${err}`));
    //     } else {
    //         //else get all
    //     }
    // },
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
        
        else if (req.query.Neighborhood) {
            Asset.find({ Neighborhood: `${req.query.Neighborhood}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Country) {
            Asset.find({ Country: `${req.query.Country}` })
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
            "City": req.query.City,
            "Street": req.query.Street,
            "Neighborhood": req.query.Neighborhood,
            "Zip": req.query.Zip,
            "Country": req.query.Country,
            "Rooms": req.query.Rooms,
            "SquareFeet": req.query.SquareFeet,
            "Floors": req.query.Floors,
            "Parking": req.query.Parking,
            "Elevator": req.query.Elevator,
            "PetsAllowed": req.query.PetsAllowed,
            "Condition": req.query.Condition,
            "Price": req.query.Price,
            "Avilability": req.query.Avilability,
            "Description":req.query.Description
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

