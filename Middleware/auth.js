// const checkAuth = async (req,res, next) => {
//     if(req.session.userID){
//         console.log("isAuthenticated - ", req.session.userID);
//         next();
//     } else {
//         console.log("Not authenticated");
//         //res.status(401).send('user is unauthenticated')
//         next();
//     }
// }

const checkAuth = (req, res, next) => {
    console.log("here")
    if (req.cookies.user) {
        console.log("checkAuthenticated = allowed")
        next()
    } else {
        console.log("checkAuthenticated = NOT allowed")
        res.status(401).send('user is unauthenticated')
    }
}

module.exports = {checkAuth};