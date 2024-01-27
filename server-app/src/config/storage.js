const multer = require('multer')
const createError = require('http-errors')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'text/csv') {
            return cb(createError.UnsupportedMediaType('File Format Not Supported, only CSV files are supported for upload'))
        }
        cb(null, true)
    }
})

module.exports = {
    upload
}
