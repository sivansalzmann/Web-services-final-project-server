const { Router } = require('express');
// const { googleAPIDBController } = require('../controllers/googleAPI.ctrl');

const googleAuthRouther = new Router();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("521754477823-1e3s41qrtptk8tl2rg6a6nks18al6286.apps.googleusercontent.com");




googleAuthRouther.post('/login', async (req,res) => { 
    let user = null;
    async function verify() {

        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: "521754477823-1e3s41qrtptk8tl2rg6a6nks18al6286.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
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
});

module.exports = { googleAuthRouther };