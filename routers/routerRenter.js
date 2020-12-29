const { Router } = require('express'); 
const{ renterDBController} = require('../controllers/renter.ctrl');

const renterRouter = new Router();  

renterRouter.get('/', renterDBController.getRenters);
renterRouter.get('/:Id', renterDBController.getRenter);
renterRouter.post('/', renterDBController.addRenter);
renterRouter.put('/:Id', renterDBController.updateRenter);
renterRouter.delete('/:Id', renterDBController.deleteRenter);


module.exports = {renterRouter};