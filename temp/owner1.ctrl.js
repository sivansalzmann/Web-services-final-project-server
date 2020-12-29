const { query } = require('express');
const Owner = require('./Models/owner');


exports.ownerDBController = {

    getOwners(req, res) {
        if (req.query.FirstName) {
            Owner.find({ FirstName: `${req.query.FirstName}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.LastName) {
            Owner.find({ LastName: `${req.query.LastName}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

        else if (req.query.Gender) {
            Owner.find({ Gender: `${req.query.Gender}` })
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
        Owner.findOne({ Id: parseInt(req.params.Id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },


    async addOwner(req, res) {
        const temp = await Owner.findOne({}).sort({ _Id: -1 }).limit(1);
        let Id = temp.Id;
        const newOwner = new Owner({
            "Id": id + 1,
            "FirstName": req.body.FirstName,
            "LastName": req.body.LastName,
            "Gender": req.body.Gender,
            "Phone": req.body.Phone,
            "Email": req.body.Email
        });

        newOwner.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    updateOwner(req, res) {
        Owner.updateOne({ Id: parseInt(req.params.Id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
        
    },
    
    deleteOwner(req, res) {
        Owner.findOneAndDelete({ Id: parseInt(req.params.Id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
};

