const { Router } = require('express');
const authDBController = require('../controllers/googleAuth.ctrl');

const googleAuthRouther = new Router();  

googleAuthRouther.post('/login', authDBController.googleAuth);
googleAuthRouther.get('/logout', authDBController.getLogout);

module.exports = { googleAuthRouther };