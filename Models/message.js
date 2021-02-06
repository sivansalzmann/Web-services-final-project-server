const { Schema,model } = require('mongoose');

const messageSchema = new Schema({
    id: { type: Number },
    RenterId: { type: Number , require:true },
    OwnerId: { type: Number , require:true },
    Timestamp: { type: String , require:true },
    Message: { type: String , require:true },
    Answer: { type:String},
}, { collection: 'messages'});

const Message = model('Message', messageSchema);

module.exports = Message;
