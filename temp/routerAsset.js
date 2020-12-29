const { Router } = require('express'); 
const{ assetDBController} = require('./asset.ctrl');

const assetRouter = new Router();  

assetRouter.get('/', assetDBController.getAssets);
assetRouter.get('/:id', assetDBController.getAsset);
assetRouter.post('/', assetDBController.addAsset);
assetRouter.put('/:id', assetDBController.updateAsset);
assetRouter.delete('/:id', assetDBController.deleteAsset);
// assetRouter.get('/', assetDBController.initialize());
module.exports = {assetRouter};
