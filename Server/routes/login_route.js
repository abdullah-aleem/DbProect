const express = require('express')
const login = express.Router()



login.post('/', function (req, res) { 
    console.log(req.body)
    if (req.body.username=="abdullah"&&req.body.password=="123") {
        res.send(true)
    }
    else {
        res.send(false)
    }
})

module.exports = login