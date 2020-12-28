const { Schema, model } = require('mongoose');
const assetSchema = require('./asset');
const personalDetailsSchema = require('./personalDetails');

const renterSchema = new Schema({
    id: { type: Number },
    personalDeatils: {type:personalDetailsSchema},
    JobTitle: {type: String },
    Budget: {type: String },
    Assets: { type:[assetSchema]},  
}, { collection: 'renters'});


const Renter = model('Renter', renterSchema);

module.exports = Renter;
