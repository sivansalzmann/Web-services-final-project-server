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
    Renter: {type:Boolean},
    Owner: {type:Boolean},
    Photo: {type:URL}
},{collection: 'users'});


const User = model('User', userSchema);

module.exports = User;

