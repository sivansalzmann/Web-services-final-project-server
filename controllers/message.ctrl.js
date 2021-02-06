const { response } = require('express');
const Message = require('../Models/message');

exports.messageDBController = {
    getMessages(req, res) {
        const filters = {}
        if (req.query.RenterId)
            filters["RenterId"] = req.query.RenterId
        if (req.query.OwnerId)
            filters["OwnerId"] = req.query.OwnerId

        Message.find(filters)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    
    },

    getMessage(req, res) {
        Message.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    async addMessage(req, res) {
        const temp = await Message.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newMessage = new Message({
            "id": id + 1,
            "Timestamp": req.body.Timestamp,
            "OwnerId": req.body.OwnerId,
            "RenterId": req.body.RenterId,    
            "Message": req.body.Message      
        });

        newMessage.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateMessage(req, res) {
        Message.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    deleteMessage(req, res) {
        Message.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


};


