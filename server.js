const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


const {assetRouter} = require("./routers/routerAsset");
const {renterRouter} = require("./routers/routerRenter");
const {ownerRouter} = require("./routers/routerOwner");
const {googleRouter} = require("./routers/routergoogleAPI");



app.use(express.json());
app.use(express.urlencoded({extended: true})); 



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','POST, PUT, GET, DELETE, OPTIONS')
    res.set('Content-Type', 'application/json');
    next();
});

app.use('/api/assets', assetRouter);
app.use('/api/renters', renterRouter);
app.use('/api/owners', ownerRouter);
app.use('/api/assetsAPI', googleRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});



app.listen(port, () => console.log('Express server is running on port ', port));