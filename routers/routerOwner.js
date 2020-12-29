const { Router } = require('express'); 
const{ ownerDBController} = require('../controllers/owner.ctrl');

const ownerRouter = new Router();  

ownerRouter.get('/', ownerDBController.getOwners);
ownerRouter.get('/:id', ownerDBController.getowner);
ownerRouter.post('/', ownerDBController.addOwner);
// ownerRouter.post('/:id',ownerDBController.updateAssetByIdOwner);
ownerRouter.put('/:id', ownerDBController.updateOwner);
ownerRouter.delete('/:id', ownerDBController.deleteOwner);




module.exports = {ownerRouter};