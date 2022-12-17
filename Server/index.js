const express = require('express');
const bodyParser=require('body-parser');
const PORT = process.env.PORT || 5000


const app = express()

const login = require('./routes/login_route')


app.use(bodyParser.json());

app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
});
app.use('/',login)

app.listen(PORT, () => {
        console.log('listening on port 5000');
})
