const { Schema, model } = require('mongoose');

const renterDeatilsScema = new Schema({
    id: { type: Number},
    RenterId:{ type: Number, require:true},
    JobTitle: {type: String , require:true},
    Budget: {type: String , require:true},
    FavoriteCountry: {type: String , require:true},
},{collection: 'renterDeatils'});


const renterDeatils = model('renterDeatils', renterDeatilsScema);

module.exports = renterDeatils;