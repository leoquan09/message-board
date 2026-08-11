const { Router } = require('express');
const logInRouter = Router();
const logInController = require('../controllers/logInController');

logInRouter.get('/login', logInController.renderLogIn);

logInRouter.post('/login', logInController.postLogIn);

module.exports = logInRouter;
