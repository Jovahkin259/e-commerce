const registerRouter = require('express-promise-router')()
const db = require('../db/index')

const validateRegistration = (req, res, next) => {
  if (!req.query.username || !req.query.password || !req.query.first_name || !req.query.last_name) {
    res.status(400).send()
  } else {
    req.values = [
      req.query.username,
      req.query.password,
      req.query.first_name,
      req.query.last_name,
      req.query.phone ? req.query.phone : null
    ]
    next()
  }
}
registerRouter.post('/', validateRegistration)

registerRouter.post('/', async (req, res, next) => {
  try {
    const result = await db.query(req.sql = 'INSERT INTO users(username, password, first_name, last_name, phone) VALUES($1, $2, $3, $4, $5) RETURNING *', req.values)
    res.status(201).json(result.rows[0])
  } catch (err) {
    next(err)
  }
})

module.exports = registerRouter
