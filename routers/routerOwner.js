const { Router } = require('express'); 
const{ownerDBController} = require('../controllers/owner.ctrl');

const ownerRouter = new Router();  

// ownerRouter.get('/', ownerDBController.getOwners);
ownerRouter.get('/:id', ownerDBController.getOwner);
ownerRouter.post('/', ownerDBController.addOwner);
ownerRouter.put('/:id', ownerDBController.updateOwner);
ownerRouter.delete('/:id', ownerDBController.deleteOwner);
module.exports = {ownerRouter};
