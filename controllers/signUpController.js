const db = require('../db/queries.js')

function renderSignUpGet(req, res) {
    res.render('signUp');
};

async function signUpPost(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const passwordCheck = req.body.passwordCheck;

    if (password.length < 4) {
        console.log('password is too short');
        res.status(400).send(`Your password is wayyy too short! How are you supposed to have a secure account if someone can easily guess your password???`);
    };

    if (password !== passwordCheck) {
        console.log(`passwords don't match`);
        res.status(400).send(`Your passwords don't match. Maybe try typing you're passwords correctly...`);
    };

    try {
        const existingUser = await db.findUserByUsername(username);

        if (existingUser) {
            console.log('username exists');
            res.status(400).send('Username already exists! Pick a new one!')
        }

        await db.addUser(username, password);
        console.log(username, password);
        res.redirect('/');
    } catch (err) {
        console.log('error adding the user', err);
        res.status(500).send('internal server error');
    };
};

module.exports = {
    renderSignUpGet,
    signUpPost
};
