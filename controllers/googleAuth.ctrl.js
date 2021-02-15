const User = require('../Models/user');
const { OAuth2Client } = require('google-auth-library');
const { findOne } = require('../Models/user');
const client = new OAuth2Client(process.env.CLIENT_ID);

exports.authDBController = {
    async googleAuth(req, res) {
        let user = null;

        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: req.body.token,
                audience: process.env.CLIENT_ID,  
                // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            user = payload
            // If request specified a G Suite domain:
            // const domain = payload['hd'];
        }
        await verify().catch(console.error);
        console.log(user)
        res.send('sucsses')

        await User.findOne({Email: payload['email']})
        .then(docs => {
            if (docs) {
                console.log('the user exists')
                // req.session.user = docs
                // console.log("createAuthLogin sess: "+req.session)
                res.cookie('user', docs, {expires: new Date(Date.now() + 3600000)})
                console.log("hhh "+ req.cookies.user)
                console.log(req)
                res.json(docs)
            } else {
                console.log('the user does NOT exist')
                let user = {
                    FirstName: payload['given_name'],
                    LastName: payload['family_name'],
                    Email: payload['email'],
                    ImageUrl: payload['picture'],
                }
                // req.session.payload = user
                user.ctrl.createUser(user, req, res) //send to controller user
            }
        })
        .catch(err => {
            console.log(err)
        })

    }
}
