const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000
const db = require('./db/index')

app.use(bodyParser.json())
app.use(errorHandler())
app.use(morgan('dev'))

app.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM users;')
  res.send(rows[0])
})

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))
