const { response } = require('express');
const {Owner} = require('../Models/person');

exports.ownerDBController = {
    getOwner(req, res) {
        Owner.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    getOwners(req, res) {
        Owner.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    
    },

    async addOwner(req, res) {
        const temp = await Owner.findOne({}).sort({ id: -1 }).limit(1);
        let id = temp.id;
        const newOwner = new Owner({
            "id": id + 1,
            "Person":{"FirstName":req.body.Person.FirstName,
                        "LastName":req.body.Person.LastName,
                        "Gender":req.body.Person.Gender,
                        "Phone":req.body.Person.Phone,
                        "Email":req.body.Person.Email}
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


