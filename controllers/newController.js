const db = require("../db/queries.js");

async function renderRequestPage(req, res) {
    res.render('form');
};

async function createPostRequest(message, author) {
    const userExists = await db.getUserByName(author);
    let userID;

    if (!userExists) {
        const newUser = await db.createUser(author);
        userID = newUser.id;
        console.log("created user: ", userID);
    } else {
        userID = userExists.id;
        console.log("found the users id: ", userID);
    };

    const newMessage = await db.createMessage(message, userID);
    console.log(newMessage);
};

module.exports = {
    renderRequestPage,
    createPostRequest
};