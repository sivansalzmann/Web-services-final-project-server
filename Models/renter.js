const { Schema, model } = require('mongoose');


const renterSchema = new Schema({
    id: { type: Number },
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
