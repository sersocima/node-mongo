
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes')
const { urlencoded } = require('express')
const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to dababase'))

app.use(routes)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.listen(3333, () => console.log('Server running at port 3333'))