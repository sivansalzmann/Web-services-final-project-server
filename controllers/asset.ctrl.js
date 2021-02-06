const { response } = require('express');
const Asset = require('../Models/asset');

exports.assetDBController = {
    getAssets(req, res) {
        const filters = {}
        if (req.query.City)
            filters["City"] = req.query.City
        if (req.query.Country)
            filters["Country"] = req.query.Country
        if (req.query.SquareFeet)
            filters["SquareFeet"] = req.query.SquareFeet
        if (req.query.Floors)
            filters["Floors"] = req.query.Floors
        if (req.query.Rooms)
            filters["Rooms"] = req.query.Rooms
        if (req.query.Condition)
            filters["Condition"] = req.query.Condition
        if (req.query.Price)
            filters["Price"] = { $gt: req.query.Price }
        if (req.query.Avilability)
            filters["Avilability"] = { $lt: req.query.Avilability }
        if (req.query.Parking)
            filters["Parking"] = req.query.Parking
        if (req.query.PetsAllowed == true)
            filters["PetsAllowed"] = req.query.PetsAllowed
        if (req.query.Elevator == true)
            filters["Elevator"] = req.query.Elevator 
        if (req.query.RenterId)
            filters["RenterId"] = req.query.RenterId 
        if (req.query.OwnerId)
            filters["OwnerId"] = req.query.OwnerId

        Asset.find(filters)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    getAsset(req, res) {
        Asset.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addAsset(req, res) {
        const temp = await Asset.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newAsset = new Asset({
            "id": id + 1,
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
            "Description": req.body.Description,
            "UrlPicture": req.body.UrlPicture,
            "OwnerId": req.body.OwnerId,
            "RenterId": req.body.RenterId,
        });

        newAsset.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateAsset(req, res) {
        const {body} = req
        const update = {}
        if (body.City != "") {
            update.City = body.City
        }
        if (body.Street != "") {
            update.Street = body.Street
        }
        if (body.Zip != "") {
            update.Zip = body.Zip
        }
        if (body.Country != "") {
            update.Country = body.Country
        }
        if (body.Neighborhood != "") {
            update.Neighborhood = body.Neighborhood
        }
        if (body.Rooms != "") {
            update.Rooms = body.Rooms
        }
        if (body.SquareFeet != "") {
            update.SquareFeet = body.SquareFeet
        }
        if (body.Floors != "") {
            update.Floors = body.Floors
        }
        if (body.Condition != "") {
            update.Condition = body.Condition
        }
        if (body.Price != "") {
            update.Price = body.Price
        }
        if (body.Avilability != "") {
            update.Avilability = body.Avilability
        }
        if (body.Description != "") {
            update.Description = body.Description
        }
        if (body.UrlPicture != "") {
            update.UrlPicture = body.UrlPicture
        }
            Asset.updateOne({ id: parseInt(req.params.id) },update)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    deleteAsset(req, res) {
        Asset.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

};


