const express = require('express')
const path = require('path')
require('dotenv').config()

let app = express()
app.get('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/static',  express.static(path.join(__dirname, 'wwwroot')))

app.listen(process.env.SERVER_PORT, () => { console.log(`server started at port: ${process.env.SERVER_PORT}`)})