const { Schema, model } = require('mongoose');
// const assetSchema = require('./asset');
// const personalDeatilsScema = require('./personalDetails');

const personalDetailsSchema = new Schema({
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
});

const ownerSchema = new Schema({
    Id: { type: Number},
    PersonalDeatils: {type:personalDetailsSchema},
}, { collection: 'owners'});


const Owner = model('Owner', ownerSchema);

module.exports = Owner;
