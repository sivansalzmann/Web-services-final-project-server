const { response } = require('express');
const Asset  = require('../Models/asset');

exports.assetDBController = {

    getAssets(req, res) {
        if (req.query.City) {
            Asset.find({ City: `${req.query.City}` })
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

        else if (req.query.Neighborhood) {
            Asset.find({ Neighborhood: `${req.query.Neighborhood}` })
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

        else if (req.query.OwnerId) {
            Asset.find({ OwnerId: `${req.query.OwnerId}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.RenterId) {
            Asset.find({ RenterId: `${req.query.RenterId}` })
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

    async addAsset(req, res) {
        const temp = await Asset.findOne({}).sort({_id:-1}).limit(1);
        let id = temp.id;
        const newAsset = new Asset({
            "id": id+1,
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
            "Description":req.body.Description,
            "Want":false,
            //fix it
            "OwnerId": 2 ,
            "RenterId": 0 
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

    getApi(req,res) {
        let google = String;
        //const apiAdd = axios.get('put huroko url...')
        // .then(response) => {
            $(document).ready(function () {
                google.maps.event.addDomListener(window, 'load', initialize);
            });
            
            function initialize() {
                var options = {
                    types: ['(regions)'],
                   }
                   var options2 = {
                    types: ['address'],
                   }
                   var options3 = {
                    types: ['counrty'],
                   }
                var inputCity = document.getElementById('city');
                var inputStreet = document.getElementById('street');
                var inputCountry = document.getElementById('counrty');
                var autocomplete = new google.maps.places.Autocomplete(inputCity,options);
                var autocomplete2 = new google.maps.places.Autocomplete(inputStreet,options2);
                var autocomplete3 = new google.maps.places.Autocomplete(inputCountry,options3);
                // placeResult = autocomplete.getPlace();
                // console.log(placeResult);//This will get only the address
                // input.value = placeResult.name;
            }

        }
};

