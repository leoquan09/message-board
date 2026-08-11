const db = require("../db/queries.js");

async function renderRequestPage(req, res) {
    res.render('form');
};

async function createPostRequest(message, author) {
    const newMessage = await db.createMessage(message, author);
    console.log(newMessage);
};

module.exports = {
    renderRequestPage,
    createPostRequest
};
