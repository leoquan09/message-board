const { Router } = require("express");
const homeRouter = Router();
const controller = require('../controllers/homeController.js');
const checkAuth = require('../helpers/checkAuth.js');

homeRouter.get('/', checkAuth, controller.renderHome);

module.exports = homeRouter;
