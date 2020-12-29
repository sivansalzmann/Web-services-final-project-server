const { Schema, model } = require('mongoose');
const assetSchema = require('./asset');

const ownerSchema = new Schema({
    id: { type: Number},
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
    Assets: [assetSchema],
}, { collection: 'owners'});


const Owner = model('Owner', ownerSchema);

module.exports = Owner;
