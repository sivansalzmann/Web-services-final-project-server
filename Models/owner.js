const { Schema, model } = require('mongoose');

const ownerSchema = new Schema({
    Id: { type: Number},
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
}, { collection: 'owners'});


const Owner = model('Owner', ownerSchema);

module.exports = Owner;
