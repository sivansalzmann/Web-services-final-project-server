const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number},
    FirstName: {type: String, required: true },
    LastName: {type: String, required: true },
    Gender: {type: String, required: true },
    Age: {type: String, required: true },
    Country: {type: String},
    Phone: {type: String, required: true },
    Email: { type: String, required: true },
    IsRenter: {type:Boolean},
    IsOwner: {type:Boolean},
},{collection: 'users'});


const User = model('User', userSchema);

module.exports = User;

