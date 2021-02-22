const { Router } = require('express'); 
const {messageDBController} = require('../controllers/message.ctrl');

const messageRouter = new Router();  

messageRouter.get('/', messageDBController.getMessages);
messageRouter.get('/:id', messageDBController.getMessage);
messageRouter.post('/', messageDBController.addMessage);
messageRouter.put('/:id', messageDBController.updateMessage);
messageRouter.delete('/:id', messageDBController.deleteMessage);

module.exports = {messageRouter};
