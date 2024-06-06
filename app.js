const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var router1 = require('./apiRouter.js')
const AccountModel = require('./models/account')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/register', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    
    AccountModel.create({
        username: username,
        password: password
    })
    .then(data=>{
        res.json('Successful register new account')
    })
    .catch(err=>{
        res.status(500).json('Failed register')
    })
})

app.use('/api/', router1);

app.listen(port, () => {
    console.log(`Testing app listening at http://localhost:${port}`)
})
    