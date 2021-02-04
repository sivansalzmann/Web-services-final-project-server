const { Schema,model } = require('mongoose');

const assetSchema = new Schema({
    id: { type: Number },
    City: {type: String , required: true },
    Street: {type: String },
    Neighborhood:  { type: String },
    Zip: { type: String },
    Country: { type: String ,required: true },
    Rooms: { type: Number },
    SquareFeet: { type: Number },
    Floors: { type: Number },
    Parking: { type: Boolean },
    Elevator: { type: Boolean },
    PetsAllowed: { type: Boolean },
    Condition: { type: String },
    Price: { type: Number ,required: true },
    Avilability: { type: String ,required: true },
    Description: { type: String },
    UrlPicture: {type:String},
    OwnerId : { type: Number ,required: true},
    RenterId : { type: Number },
}, { collection: 'assets'});

const Asset = model('Asset', assetSchema);

module.exports = Asset;
