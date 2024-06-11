const express = require('express')
var router = express.Router()
// const UserModel = require('./models/user.js')


// router.post('/register', (req, res, next) => {
//     var username = req.body.username
//     var password = req.body.password
//     var email = req.body.email
    
//     UserModel.create({
//         username: username,
//         password: password,
//         email: email,
        
//     })
//     .then(data=>{
//         res.json('Successful register new account')
//     })
//     .catch(err=>{
//         res.status(500).json('Failed register')
//     })
// })


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