const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: {type:Number,required: true},
    googleID: {type:Number,required: true},
    FirstName: {type: String, required: true },
    LastName: {type: String, required: true },
    Email: { type: String, required: true },
    ImageUrl: {type:String},
    Gender: {type: String},
    Age: {type: String},
    Country: {type: String},
    Phone: {type: String},
    IsRenter: {type:Boolean},
    IsOwner: {type:Boolean},
},{collection: 'users'});


const User = model('User', userSchema);

module.exports = User;

