const { Router } = require("express");
const homeRouter = Router();
const controller = require('../controllers/homeController.js');

homeRouter.get('/', controller.renderHome);

module.exports = homeRouter;