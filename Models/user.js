const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number},
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
    JobTitle: {type: String },
    Budget: {type: String },
    AssetsWishList: [{type:Number}],
    Renter: {type:Boolean},
    Owner: {type:Boolean},
    Password: { type: String}
},{collection: 'users'});


const User = model('User', userSchema);

module.exports = User;

