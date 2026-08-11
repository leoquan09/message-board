const { Router } = require('express');
const newRouter = Router();
const controller = require('../controllers/newController.js');
const checkAuth = require('../helpers/checkAuth.js');

newRouter.get('/new', checkAuth, controller.renderRequestPage);

newRouter.post('/new', checkAuth, async (req, res) => {
    const message = req.body.message;
    const author = req.user.id;
    await controller.createPostRequest(message, author);
    res.redirect('/');
});

module.exports = newRouter;
