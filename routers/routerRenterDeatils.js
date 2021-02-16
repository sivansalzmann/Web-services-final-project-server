const { Router } = require('express'); 
const {renterDeatilsDBController} = require('../controllers/renterDeatils.ctrl');

const renterDeatilsRouter = new Router();  

renterDeatilsRouter.get('/:RenterId', renterDeatilsDBController.getRenterDeatils);
renterDeatilsRouter.post('/', renterDeatilsDBController.addRenterDeatils);
renterDeatilsRouter.put('/:id', renterDeatilsDBController.updateRenterDeatils);
module.exports = {renterDeatilsRouter};
