const createError = require('http-errors')
const { readAndParseFile, countByBookingType, parseCsv } = require('./service')

exports.postTents = async (req, res, next) => {
    try {
        const csvRows = await readAndParseFile({ filePath: req.file.path })
        if (csvRows.length === 0) {
            return next(createError.BadRequest('The uploaded CSV file is empty. Please ensure the file contains data'))
        }
        const [firstRow, ...bodyRows] = csvRows

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
        return next({
            errors: error.errors,
            message: error.message
        })
    }
}
