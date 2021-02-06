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
                audience: CLIENT_ID,  
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

        User.findOne
    }


}
