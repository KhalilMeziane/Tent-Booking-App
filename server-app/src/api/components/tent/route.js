const router = require('express').Router()

const { tents } = require('./controller')

router.get('/', tents)

module.exports = router
