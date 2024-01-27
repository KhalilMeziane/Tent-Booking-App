const createError = require('http-errors')
const { readAndParseFile, countByBookingType, parseCsv } = require('./service')

exports.postTents = async (req, res, next) => {
    try {
        const [firstRow, ...bodyRows] = await readAndParseFile({ filePath: req.file.path })

        const csvHeader = firstRow.join().trim().toLowerCase().replace(/\s+/g, '').split(',')
        const hasAllHeaders = csvHeader.every(elem => ['id', 'username', 'bookingtype'].includes(elem))

        if (!hasAllHeaders) {
            return next(createError.BadRequest("The uploaded CSV file must contain headers: 'id', 'user name', and 'booking type'. Please ensure the file structure is correct."))
        }
        const bookingList = parseCsv({ rowBookingList: bodyRows })
        const { group, individual } = countByBookingType({ bookingList })
        res.status(201).json({
            bookingList,
            tents: group + Math.ceil(individual / 5)
        })
    } catch (error) {
        console.log('error: ', error)
        return next({
            status: error.status || 500,
            errors: error.errors,
            message: error.message
        })
    }
}
