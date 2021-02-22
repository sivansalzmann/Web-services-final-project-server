const { Schema, model } = require('mongoose');

const userSchema = new Schema({
<<<<<<< Updated upstream
    id: {type:Number,required: true},
    googleID: {type:Number,required: true},
=======
    id: { type: Number},
    googleID: {type: String, require:true},
>>>>>>> Stashed changes
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

