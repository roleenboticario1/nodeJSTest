const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()


// Middleware

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
const accountsRoutes = require('./routes/Accounts')

app.use('/accounts', accountsRoutes)

//database connection
const dbConfig = 'mongodb://127.0.0.1:27017'
const dbName = 'db_test'

mongoose.connect(`${dbConfig}/${dbName}`, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
} /*, (err) => err ? console.log("Not Connected") : console.log('Connected') */)

const port = 3000


app.listen(port, () => {
	console.log("Listening on port", port)
})

