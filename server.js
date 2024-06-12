const express = require('express')
const connectDB = require('./configs/db');
const app = express()
const port = process.env.PORT
const userRoutes = require('./routes/userRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const expenseRoutes = require('./routes/expenseRoutes')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routers
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})








// var router1 = require('./routers/apiRouter.js')
// app.use('/api/', router1);
// app.use('', router1);
    