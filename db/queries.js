const db = require('../config/pool.js')

const pool = require('../config/pool.js');
const hash = require('../helpers/hash.js');

async function findUserByUsername(user) {
    const query = `
    SELECT * FROM users
    WHERE username = $1;
    `;
    const { rows } = await pool.query(query, [user]);
    return rows[0];
};

async function findUserById(id) {
    const query = `
    SELECT * FROM users
    WHERE id = $1;
    `;

    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

async function addUser(username, password) {
    const query = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING *;
    `;
    
    const hashedPassword = await hash.hashPassword(password);
    await pool.query(query, [username, hashedPassword]);
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
    findUserByUsername,
    findUserById,
    addUser,
    createMessage,
    getMessages
}
