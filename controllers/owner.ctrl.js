const { query } = require('express');
const Owner = require('../Models/owner');


exports.ownerDBController = {

    getOwners(req, res) {
        if (req.query.first_name) {
            Owner.find({ first_name: `${req.query.first_name}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.last_name) {
            Owner.find({ last_name: `${req.query.last_name}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.gender) {
            Owner.find({ gender: `${req.query.gender}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Phone) {
            Owner.find({ Phone: `${req.query.Phone}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Email) {
            Owner.find({ Email: `${req.query.Email}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

         
        else {
            Owner.find({})
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }
    },

    getowner(req, res) {
        Owner.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },


    async addOwner(req, res) {
        const temp = await Owner.findOne({}).sort({ _id: -1 }).limit(1);
        let id = temp.id;
        const newOwner = new Owner({
            "id": id + 1,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "gender": req.body.gender,
            "Phone": req.body.Phone,
            "Email": req.body.Email
        });

        newOwner.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateOwner(req, res) {
        Owner.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        
    },
    
    deleteOwner(req, res) {
        Owner.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
};

