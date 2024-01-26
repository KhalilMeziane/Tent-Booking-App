const router = require('express').Router()

const { verifyAuthorization } = require('../../middlewares/auth')
const { upload } = require('../../../config')
const { postTents } = require('./controller')

router.post('/', verifyAuthorization, upload.single('booking'), postTents)

module.exports = router
