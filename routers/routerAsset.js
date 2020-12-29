const { Router } = require('express'); 
const{ assetDBController} = require('../controllers/asset.ctrl');

const assetRouter = new Router();  

assetRouter.get('/', assetDBController.getAssets);
assetRouter.get('/:Id', assetDBController.getAsset);
assetRouter.post('/', assetDBController.addAsset);
assetRouter.put('/:Id', assetDBController.updateAsset);
assetRouter.delete('/:Id', assetDBController.deleteAsset);
assetRouter.get('/', assetDBController.initialize());
module.exports = {assetRouter};
