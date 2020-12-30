const { Router } = require('express');
const { googleAPIDBController } = require('../controllers/googleAPI.ctrl');

const googleRouter = new Router();

/* http://localhost:3000/api/assetAPI */
googleRouter.get('/', googleAPIDBController.getAssetLocationFromAPI);

module.exports = { googleRouter };