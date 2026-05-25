const db = require('./pool.js');

async function getUserByName(username) {
    const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return rows[0];
};

async function createUser(username) {
    const { rows } = await db.query(
        'INSERT INTO users (username) VALUES ($1) RETURNING *',
        [username]
    );
    return rows[0];
};

async function getMessages() {
    const { rows } = await db.query(
        'SELECT username, message, timesent FROM messages INNER JOIN users ON messages.user_id = users.id WHERE message IS NOT NULL'
    );
    return rows;
};

async function createMessage(message, userID) {
    const { rows } = await db.query(
        'INSERT INTO messages (message, user_id) VALUES ($1, $2) RETURNING *',
        [message, userID]
    );
    return rows[0];
};

module.exports = {
    getUserByName,
    createUser,
    createMessage,
    getMessages
}