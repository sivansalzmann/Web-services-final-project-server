const { Schema, model } = require('mongoose');

const assetSchema = new Schema({
    Id: { type: Number },
    City: {type: String },
    Street: {type: String },
    Neighborhood:  { type: String },
    Zip: { type: String },
    Country: { type: String },
    Rooms: { type: Number },
    SquareFeet: { type: Number },
    Floors: { type: Number },
    Parking: { type: Boolean },
    Elevator: { type: Boolean },
    PetsAllowed: { type: Boolean },
    Condition: { type: String },
    Price: { type: String },
    Avilability: { type: String },
    Description: { type: String },
    Want : { type: Boolean },
    OwnerId : {type : String},
    RenterId : {type : String},
}, { collection: 'assets'});

const Asset = model('Asset', assetSchema);

module.exports = Asset;
