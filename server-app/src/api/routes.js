const router = require('express').Router()

const auth = require('./components/auth/route')
const tent = require('./components/tent/route')

router.use('/auth', auth)
router.use('/tent', tent)

module.exports = router
