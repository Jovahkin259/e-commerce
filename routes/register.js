const registerRouter = require('express-promise-router')()
const db = require('../db/index')

// example query
// localhost:3000/register?username="dolly"&password="test123"&first_name="amellia"&last_name="brown"&phone=123
registerRouter.post('/', async (req, res, next) => {
  const query = 'INSERT INTO users(username, password, first_name, last_name, phone) VALUES($1, $2, $3, $4, $5) RETURNING *'
  const values = [
    req.query.username,
    req.query.password,
    req.query.first_name,
    req.query.last_name,
    req.query.phone ? req.query.phone : null
  ]
  try {
    const result = await db.query(query, values)
    res.status(201).json(result.rows[0])
  } catch (err) {
    next(err)
  }
})

module.exports = registerRouter
