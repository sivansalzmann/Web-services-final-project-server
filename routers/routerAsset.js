const { Router } = require('express'); 
const{ assetDBController} = require('../controllers/asset.ctrl');

const assetRouter = new Router();  

assetRouter.get('/', assetDBController.getAssets);
assetRouter.get('/:id', assetDBController.getAsset);
assetRouter.post('/', assetDBController.addAsset);
assetRouter.put('/:id', assetDBController.updateAsset);
assetRouter.delete('/:id', assetDBController.deleteAsset);

module.exports = {assetRouter};
