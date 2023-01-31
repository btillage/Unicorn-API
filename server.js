require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('connected', () => console.log('Connected to database'));

app.use(express.json())

const unicornRouter = require("./routes/unicorns")
app.use('/unicorns', unicornRouter)

const rideRouter = require("./routes/rides")
app.use('/rides', rideRouter)

const longestRiderRouter = require("./routes/longest-rider")
app.use('/longest-rider', longestRiderRouter)


app.listen(3000, () => console.log('server started'))