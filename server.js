require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(errorHandler())
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Hello world'))

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))
