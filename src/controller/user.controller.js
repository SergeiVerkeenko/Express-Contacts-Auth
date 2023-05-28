const express = require('express')

const route = express.Router()

route.post('/registration', (req, res) => {
    const { email, pwd } = req.body
    res.status(200).send('123')
})



module.exports = route
