const passport = require("passport");

function renderLogIn(req, res) {
    res.render('login');
};

function postLogIn(req, res, next) {
    passport.authenticate('local', {
    successRedirect: '/', 
    failureRedirect: '/logIn',    
    failureMessage: true           
  })(req, res, next);
}

module.exports = {
    renderLogIn,
    postLogIn
};
