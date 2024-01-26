const { morganMiddleware } = require('./logger')
const { upload } = require('./storage')

module.exports = {
    morganMiddleware,
    upload
}
