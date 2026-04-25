const { Router } = require('express');
const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render('form');
    console.log('request made to new');
});

module.exports = newRouter;