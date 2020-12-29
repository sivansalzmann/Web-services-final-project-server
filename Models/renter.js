const { Schema, model } = require('mongoose');
//const assetSchema = require('./asset');
//const personalDetailsSchema = require('./personalDetails');

// const personalDetailsSchema = new Schema({
//     first_name: {type: String},
//     last_name: {type: String},
//     gender: { type: String},
//     Phone: {type: String},
//     Email: { type: String},
// });

const renterSchema = new Schema({
    Id: { type: Number },
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
    JobTitle: {type: String },
    Budget: {type: String },
}, { collection: 'renters'});


const Renter = model('Renter', renterSchema);
module.exports = Renter;
