const { Schema } = require('mongoose');

const adressSchema = new Schema ({
    City: {type: String },
    Street: {type: String },
    Neighborhood:  { type: String },
    Zip: { type: String },
    Country: { type: String },
});


const assetSchema = new Schema({
    id: { type: Number },
    Adress : {type: adressSchema},
    Rooms: { type: Number },
    SquareFeet: { type: Number },
    Floors: { type: Number },
    Parking: { type: Boolean },
    Elevator: { type: Boolean },
    PetsAllowed: { type: Boolean },
    Condition: { type: String },
    Price: { type: Number },
    Avilability: { type: String },
    Description: { type: String },
    Want : { type: Boolean },
}, { collection: 'assets'});


module.exports = assetSchema;
