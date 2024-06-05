const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var router1 = require('./apiRouter.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/register', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    
    console.log(username, password)
})

app.use('/api/', router1);

app.listen(port, () => {
    console.log(`Testing app listening at http://localhost:${port}`)
})
    