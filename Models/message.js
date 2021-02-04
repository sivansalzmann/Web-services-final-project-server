const { Schema,model } = require('mongoose');

const messageSchema = new Schema({
    id: { type: Number },
    Main: {type: String },
  
}, { collection: 'messages'});

const Message = model('Message', messageSchema);

module.exports = Message;
