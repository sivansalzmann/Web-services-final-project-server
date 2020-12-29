// const { query } = require('express');
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
            "OwnerId": 0 ,
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
    }
    
};

// ______________API_________________
  // This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:

// let placeSearch;
// let autocomplete;
// const componentForm = {
//   street_number: "short_name",
//   route: "long_name",
//   locality: "long_name",
//   administrative_area_level_1: "short_name",
//   country: "long_name",
//   postal_code: "short_name",
// };

// function initAutocomplete() {
//   // Create the autocomplete object, restricting the search predictions to
//   // geographical location types.
//   autocomplete = new google.maps.places.Autocomplete(
//     document.getElementById("autocomplete"),
//     { types: ["cities"] }
//   );
//   // Avoid paying for data that you don't need by restricting the set of
//   // place fields that are returned to just the address components.
//   autocomplete.setFields(["address_component"]);
//   // When the user selects an address from the drop-down, populate the
//   // address fields in the form.
//   autocomplete.addListener("place_changed", fillInAddress);
// }

// function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   const place = autocomplete.getPlace();

//   for (const component in componentForm) {
//     document.getElementById(component).value = "";
//     document.getElementById(component).disabled = false;
//   }

//   // Get each component of the address from the place details,
//   // and then fill-in the corresponding field on the form.
//   for (const component of place.address_components) {
//     const addressType = component.types[0];

//     if (componentForm[addressType]) {
//       const val = component[componentForm[addressType]];
//       document.getElementById('city').value = val;
//     }
//   }
// }

//     $(document).ready(function () {
//       google.maps.event.addDomListener(window, 'load', initialize);
//    });
   
//    function initialize() {
//        var input = document.getElementById('city');
//        var autocomplete = new google.maps.places.Autocomplete(input);
      
// }
// $(document).ready(function () {
//     google.maps.event.addDomListener(window, 'load', initialize);
// });

// function initialize() {
//     var options = {
//         types: ['(regions)'],
//        }
//        var options2 = {
//         types: ['address'],
//         componentRestrictions: {country: 'il'}
//        }
//     var input = document.getElementById('city');
//     var input2 = document.getElementById('street');
//     var autocomplete = new google.maps.places.Autocomplete(input,options);
//     var autocomplete2 = new google.maps.places.Autocomplete(input2,options2);
//     placeResult = autocomplete.getPlace();
//     console.log(placeResult);//This will get only the address
//     input.value = placeResult.name;
    
// }