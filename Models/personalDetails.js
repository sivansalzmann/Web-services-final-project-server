const {Schema} = require('mongoose');

const personalDetailsSchema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    gender: { type: String},
    Phone: {type: String},
    Email: { type: String},
});

module.exports = personalDetailsSchema;