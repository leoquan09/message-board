const { Router } = require('express');
const newRouter = Router();
const controller = require('../controllers/newController.js');

newRouter.get('/', controller.renderRequestPage);

newRouter.post('/', async (req, res) => {
    const message = req.body.message;
    const author = req.body.author;
    await controller.createPostRequest(message, author);
    res.redirect('/');
});

module.exports = newRouter;