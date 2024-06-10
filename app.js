const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var router1 = require('./apiRouter.js')
const UserModel = require('./models/user.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/register', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    
    UserModel.create({
        username: username,
        password: password,
        email: email,
        
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
    