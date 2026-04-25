const { Router } = require("express");
const homeRouter = Router();

const messages = [];

homeRouter.post('/new', (req, res) => {
    const { content, author } = req.body;
    messages.push({ text: content, user: author, added: new Date() });
    res.redirect('/');
});

homeRouter.get('/', (req, res) => {
    res.render('home', { messages: messages });
    console.log('request made to home');
});

module.exports = homeRouter;