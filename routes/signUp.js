const { Router } = require('express');
const signUpRouter = Router();
const signUpController = require('../controllers/signUpController');

signUpRouter.get('/signUp', signUpController.renderSignUpGet);
signUpRouter.post('/signUp', signUpController.signUpPost);

module.exports = signUpRouter;
