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
