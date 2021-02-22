const { Schema, model } = require('mongoose');

const additionalInformationScema = new Schema({
    googleID: {type:Number,required: true},
    Gender: {type: String},
    Age: {type: String},
    Country: {type: String},
    Phone: {type: String},
    IsRenter: {type:Boolean},
    IsOwner: {type:Boolean},
},{collection: 'additionalInformations'});


const AdditionalInformation = model('AdditionalInformation', additionalInformationScema);

module.exports = AdditionalInformation;

