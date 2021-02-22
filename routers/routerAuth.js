// const { OAuth2Client } = require('google-auth-library')
// const client = new OAuth2Client(process.env.CLIENT_ID)
// const { Router } = require('express');
// const authRouter = new Router()
// const userDBController = require('./../Controllers/user.ctrl');

// // const verify = async (token) => {
// //     const ticket = await client.verifyIdToken({
// //         idToken: token,
// //         audience: process.env.CLIENT_ID
// //     });
// //     const payload = ticket.getPayload();

// //     console.log(payload);    
// //     let user = {
// //         id: payload['sub'],
// //         Email: payload['email'],
// //         FiestName: payload['given_name'],
// //         LasrName: payload['family_name'],
// //     }
    
// //     return user;
// // }

// verify = async (token) => {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID
//     }).catch(err => console.log(err))
//     return ticket.getPayload();
// }

// const checkDB = async (user) => {
//     let dbUser = await userDBController.userDBController.getUserToGoogle(user.name, user.email);
//     return dbUser;
// }
// authRouter.post('/', async (req, res) => {
//     let token = req.body.token;
//     try {
//         let user = await verify(token);
//         let dbUser = null ;
//         dbUser = await checkDB(user);
        
//         // user exist
//         if(dbUser != null){
//             console.log("User exist");
//             res.cookie('user-token', token, { 
//                 expires: new Date(Date.now() + 3600000),
//                 sameSite: true });
//             res.json(dbUser);
//         } else {
//             console.log("Not works");
//             res.json("User don't exist");
//         }
//         req.session.userID = dbUser.id;
//     } catch (err) {
//         console.log(err);
//     }
// })

// authRouter.get('/', (req, res) => {
//     console.log("You are in the logout section")
//     req.logout();
//     res.clearCookie('user-token');
//     console.log("Logged-out");
//     res.send("logged out?")
// })

// module.exports = { authRouter };

const { Router } = require('express');
const authRouter = new Router();

const authController = require('../controllers/auth.ctrl');

authRouter.get('/logout', authController.getLogout);
authRouter.post('/', authController.createAuthLogin);

module.exports = { authRouter };