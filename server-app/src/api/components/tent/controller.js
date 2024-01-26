const { readAndParseFile, countByBookingType } = require('./service')

exports.postTents = async (req, res, next) => {
    try {
        const bookingList = await readAndParseFile({ filePath: req.file.path })
        const { group, individual } = countByBookingType({ bookingList })
        res.status(201).json({
            bookingList,
            tents: group + Math.ceil(individual / 5)
        })
    } catch (error) {
        console.log('error: ', error)
    }
}
