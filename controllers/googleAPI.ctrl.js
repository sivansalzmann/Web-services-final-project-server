//const asset = require('../models/asset');
const axios = require('axios').default;


exports.googleAPIDBController = {

    getAssetLocationFromAPI(req, res) {
    
        if(req.query.length != 0) {
            axios
                .get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3M9jeCdMvyitFKwBaFGhdWMTdcIOuNPc&libraries=places`)
                .then((response) => {res.json(response.data);})
                .catch(err => console.log(`Error is: ${err}`));
        }
       
    }
}