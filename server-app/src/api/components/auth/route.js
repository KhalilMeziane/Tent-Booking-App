const router = require('express').Router()

const { login } = require('./controller')

router.post('/login', login)

module.exports = router
