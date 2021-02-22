const User = require('../Models/user');
const {userDBController} = require('./user.ctrl')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

getLogout = (req, res) => {
    res.clearCookie('user')
    res.clearCookie('connect.sid');
    res.send("logout");
};

verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    }).catch(err => console.log(err))
    return ticket.getPayload();
}

createAuthLogin = async (req, res, next) => {
    let token = req.body.token
    let payload = await verify(token)

    await User.findOne({googleID: payload['sub']})
        .then(docs => {
            if (docs) {
                res.cookie('user', docs)
                res.json(docs)
            } else {
                console.log('the user does NOT exist')
                let user = {
                    id: payload['sub'],
                    FirstName: payload['given_name'],
                    LastName: payload['family_name'],
                    Email: payload['email'],
                    ImageUrl: payload['picture']
                }
                userDBController.addUser(user, req, res)
            }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    getLogout,
    createAuthLogin,
}