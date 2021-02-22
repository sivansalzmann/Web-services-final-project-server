const { Router } = require('express'); 
const {userDBController} = require('../controllers/user.ctrl');

const userRouter = new Router();  

userRouter.get('/', userDBController.getUsers);
userRouter.get('/:googleId', userDBController.getUser);
userRouter.post('/', userDBController.addUser);
userRouter.put('/:googleId', userDBController.updateUser);

module.exports = {userRouter};
