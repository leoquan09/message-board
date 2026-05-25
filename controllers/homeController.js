const db = require('../db/queries.js');

async function renderHome(req, res) {
    const messages = await db.getMessages();
    console.log(messages);

    res.render('home.ejs', { messages: messages });
};

module.exports = { renderHome };