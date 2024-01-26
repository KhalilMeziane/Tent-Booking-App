const { readAndParseFile } = require('./service')

exports.postTents = async (req, res, next) => {
    try {
        const data = await readAndParseFile({ filePath: req.file.path })
        console.log('data: ', data)
        res.status(200).json({
            message: 'tents',
            bookings: data
        })
    } catch (error) {
        console.log('error: ', error)
    }
}
