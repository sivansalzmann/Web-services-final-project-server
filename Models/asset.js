const { Schema, model } = require('mongoose');

const assetSchema = new Schema({
    id: { type: Number, required: true },
    City: {type: String, required: true},
    Street: {type: String, required: true},
    Zip: { type: String, required: true},
    Country: { type: String, required: true},
    Rooms: { type: Number, required: true},
    SquareFeet: { type: Number, required: true},
    Floors: { type: Number, required: true},
    Parking: { type: Boolean, required: true},
    Elevator: { type: Boolean, required: true},
    PetsAllowed: { type: Boolean, required: true},
    Condition: { type: Number, required: true},
    Price: { type: String, required: true },
    Avilability: { type: Date, required: true},
    Discription: { type: String, required: true },
}, { collection: 'assets'});

const Asset = model('Asset', assetSchema);

module.exports = Asset;
