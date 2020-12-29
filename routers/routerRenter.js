const { Router } = require('express'); 
const{ renterDBController} = require('../controllers/renter.ctrl');

const renterRouter = new Router();  

renterRouter.get('/', renterDBController.getRenters);
renterRouter.get('/:id', renterDBController.getRenter);
renterRouter.post('/', renterDBController.addRenter);
renterRouter.put('/:id', renterDBController.updateRenter);
renterRouter.delete('/:id', renterDBController.deleteRenter);


module.exports = {renterRouter};