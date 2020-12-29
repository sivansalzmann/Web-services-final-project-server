const { Router } = require('express'); 
const{ ownerDBController} = require('../controllers/owner.ctrl');

const ownerRouter = new Router();  

ownerRouter.get('/', ownerDBController.getOwners);
ownerRouter.get('/:Id', ownerDBController.getowner);
ownerRouter.post('/', ownerDBController.addOwner);
ownerRouter.put('/:Id', ownerDBController.updateOwner);
ownerRouter.delete('/:Id', ownerDBController.deleteOwner);


module.exports = {ownerRouter};