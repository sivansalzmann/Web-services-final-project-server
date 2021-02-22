<<<<<<< Updated upstream
const User = require('../Models/user');
const { OAuth2Client } = require('google-auth-library');
// const { findOne } = require('../Models/user');
const client = new OAuth2Client(process.env.CLIENT_ID);
const {userDBController} = require('../controllers/user.ctrl');

getLogout = (req, res) => {
    console.log("here in log out")
    res.clearCookie('user')
    res.clearCookie('connect.sid');
    res.send("logout");
}
verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    }).catch(err => console.log(err))
    return ticket.getPayload();
}
googleAuth = async (req, res, next) => {
    let token = req.body.token
    let payload = await verify(token)

    await User.findOne({googleID: payload['sub']})
        .then(docs => {
            if (docs) {
                res.cookie('user', docs)
                res.json(docs)
                res.json('the user exist')
            } else {
                res.json('the user does NOT exist')
                let user = {
                    id: payload['sub'],
                    FirstName: payload['given_name'],
                    LastName: payload['family_name'],
                    Email: payload['email'],
                    ImageUrl: payload['picture'],
                }
                userDBController.addUser(user, req, res)
            }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    googleAuth,
    getLogout
}

=======
// const User = require('../models/user');
// const UserCtrl = require('./user.ctrl')
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(process.env.CLIENT_ID);

// getLogout = (req, res) => {
//     res.clearCookie('user')
//     res.clearCookie('connect.sid');
//     res.send("logout");
// };

// verify = async (token) => {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID
//     }).catch(err => console.log(err))
//     return ticket.getPayload();
// }

// createAuthLogin = async (req, res, next) => {
//     console.log("here")
//     let token = req.body.token
//     let payload = await verify(token)
//     console.log(payload)

//     await User.findOne({googleID: payload['sub']})
//         .then(docs => {
//             if (docs) {
//                 res.cookie('user', docs)
//                 res.json(docs)
//             } else {
//                 console.log('the user does NOT exist')
//                 let user = {
//                     id: payload['sub'],
//                     f_name: payload['given_name'],
//                     l_name: payload['family_name'],
//                     email: payload['email'],
//                     avatar: payload['picture']
//                 }
//                 UserCtrl.addUser(user, req, res)
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// module.exports = {
//     getLogout,
//     createAuthLogin,
// }
>>>>>>> Stashed changes
