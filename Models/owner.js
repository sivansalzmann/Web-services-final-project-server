const { Schema, model } = require('mongoose');

const ownerSchema = new Schema({
    id: { type: Number, required: true },
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    gender: { type: String, required: true},
    Phone: {type: String, require: true},
    Email: { type: String, required: true},
    Properties: { type: Number, required: true},
}, { collection: 'owners'});


const Owner = model('Owner', ownerSchema);

module.exports = Owner;
