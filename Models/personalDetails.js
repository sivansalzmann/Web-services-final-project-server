const {Schema} = require('mongoose');

const personalDetailsSchema = new Schema({
    FirstName: {type: String},
    LastName: {type: String},
    Gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
});

module.exports = personalDetailsSchema;