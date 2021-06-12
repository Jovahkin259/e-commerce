const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000
const registerRouter = require('./routes/register')

app.use(bodyParser.json())
app.use(errorHandler())
app.use(morgan('dev'))

// app.use('/', (req, res) => res.json({ info: 'Node.js, Express, Postgres' }))

app.use('/register', registerRouter)

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))
