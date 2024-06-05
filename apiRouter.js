const express = require('express')
var router = express.Router()

router.get('/', (req,res) => {
    res.json('Hello Jane')
})

router.post('/', (req,res) => {
    console.log(req.body);
    console.log(req.headers);
    res.json('router user POST' + req.body.username)
})

router.get('/product', (req,res) => {
    res.json('router product')
})

router.get('/:id', (req,res) => {
    res.json('router user' + req.params.id)
})

module.exports = router