const { Schema, model } = require('mongoose');


const personSchema = new Schema({
    id: { type: Number},
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
    PassWord: { type: String}
});

const ownerSchema = new Schema ({
    id: { type: Number},
    Person: [personSchema],
}, {collection: 'owners'});

const renterSchema = new Schema({
    id: { type: Number},
    Person: [personSchema],
    JobTitle: {type: String },
    Budget: {type: String },
}, { collection: 'renters'});


const Owner = model('Owner', ownerSchema);
const Renter = model('Renter', renterSchema);

module.exports = {Owner, Renter};
