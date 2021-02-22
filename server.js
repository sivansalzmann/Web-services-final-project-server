const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' })

const {assetRouter} = require("./routers/routerAsset");
const {userRouter} = require("./routers/routerUser");
const {messageRouter} = require("./routers/routerMessage");
const {renterDeatilsRouter} = require("./routers/routerRenterDeatils");
const {googleRouter} = require("./routers/routergoogleAPI");
const { googleAuthRouther } = require('./routers/routerGoogleAuth');


app.use(cors({ origin: true, credentials: true }))
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());
app.use(morgan('tiny', { stream: logStream }))

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods','POST, PUT, GET, DELETE, OPTIONS')
//     res.set('Content-Type', 'application/json');
//     next();
// });


app.use('/api/auth', googleAuthRouther)
app.use('/api/assets', assetRouter);
app.use('/api/users',userRouter);
app.use('/api/messages', messageRouter);
app.use('/api/renterDeatils', renterDeatilsRouter);
app.use('/api/assetsAPI', googleRouter);

app.use((req, res, next) => {
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));