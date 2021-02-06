const googleAuthRouther = require('./routerGoogleAuth');

const constants = require('../constants')



const checkUser = async (req, cookie) => {
    let user = null;
    user = await googleAuthRouther.getCostumerByGoogle(cookie);
    if (user) {
        req.user = user;
        req.role = constants.USER
    }
    return user
}

const confirmUser = async (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.send("user not found need to register")
    }
}

module.exports = { confirmUser, checkUser}