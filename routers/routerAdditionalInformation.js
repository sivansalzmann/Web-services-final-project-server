const { Router } = require('express'); 
const {additionalInformationDBController} = require('../controllers/additionalInformation.ctrl');

const additionalInformationRouter = new Router();  

additionalInformationRouter.get('/:googleId', additionalInformationDBController.getInformation);
additionalInformationRouter.post('/', additionalInformationDBController.addInformation);
additionalInformationRouter.put('/:googleId', additionalInformationDBController.updateInformation);
module.exports = {additionalInformationRouter};
