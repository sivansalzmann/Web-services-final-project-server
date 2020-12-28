const { Schema, model } = require('mongoose');

const assetSchema = new Schema({
    id: { type: Number, required: true },
    City: {type: String, required: true},
    Street: {type: String, required: true},
    Neighborhood:  { type: String, required: true},
    Zip: { type: String, required: true},
    Country: { type: String, required: true},
    Rooms: { type: Number, required: true},
    SquareFeet: { type: Number, required: false},
    Floors: { type: Number, required: false},
    Parking: { type: Boolean, required: false},
    Elevator: { type: Boolean, required: false},
    PetsAllowed: { type: Boolean, required: false},
    Condition: { type: String, required: false},
    Price: { type: Number, required: false },
    Avilability: { type: String, required: false},
    Description: { type: String, required: false },
    AppartmentWant : { type: Boolean, required: false},
}, { collection: 'assets'});

const Asset = model('Asset', assetSchema);

module.exports = Asset;
