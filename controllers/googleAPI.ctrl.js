//const asset = require('../models/asset');
const axios = require('axios').default;


exports.googleAPIDBController = {

    getAssetLocationFromAPI(req, res) {
        if(req.query.length != 0) {
            axios
                .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.city}&types=(cities)&language=en&key=AIzaSyBkxP0uOzCNjtByiZD1KccRs7GFfKy_7ss`)
                .then((response) => {res.json(response.data);})
                .catch(err => console.log(`Error is: ${err}`));
        }
       
    }
}