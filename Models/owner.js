const { Schema, model } = require('mongoose');
// const assetSchema = require('./asset');
// const personalDeatilsScema = require('./personalDetails');

const personalDetailsSchema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
});

const ownerSchema = new Schema({
    id: { type: Number},
    personalDeatils: {type:personalDetailsSchema},
}, { collection: 'owners'});


const Owner = model('Owner', ownerSchema);

module.exports = Owner;
