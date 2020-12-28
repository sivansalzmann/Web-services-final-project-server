const { Schema, model } = require('mongoose');

const renterSchema = new Schema({
    id: { type: Number, required: true },
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    gender: { type: String, required: true},
    Phone: {type: String, require: true},
    Email: { type: String, required: true},
    JobTitle: {type: String, required: true},
    Budget: {type: String, required: true},
    Assets: { type: Object, required: false},  
}, { collection: 'renters'});


const Renter = model('Renter', renterSchema);

module.exports = Renter;
