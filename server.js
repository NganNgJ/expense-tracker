const express = require('express')
const connectDB = require('./configs/db');
const app = express()
const port = process.env.PORT||3000
const userRoutes = require('./routes/userRoutes')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routers
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})








// var router1 = require('./routers/apiRouter.js')
// app.use('/api/', router1);
// app.use('', router1);
    