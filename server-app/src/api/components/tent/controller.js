const createError = require('http-errors')
const { readAndParseFile, countByBookingType, parseCsv } = require('./service')

exports.postTents = async (req, res, next) => {
    try {
        if (!req.file) {
            return next(createError.BadRequest('No file was uploaded. Please ensure you include a CSV file in your request'))
        }

        const csvRows = await readAndParseFile({ filePath: req.file.path })
        if (csvRows.length === 0) {
            return next(createError.BadRequest('The uploaded CSV file is empty. Please ensure the file contains data'))
        }
        const [firstRow, ...bodyRows] = csvRows

        const csvHeader = firstRow.join().trim().toLowerCase().replace(/\s+/g, '').split(',')
        const requiredHeaders = ['id', 'username', 'bookingtype']

        const missingHeaders = requiredHeaders.filter(header => !csvHeader.includes(header))
        if (missingHeaders.length > 0) {
            return next(createError.BadRequest(`The uploaded CSV file is missing the following headers: ${missingHeaders.join(', ')}. Please ensure the file structure is correct.`))
        }

        const bookingList = parseCsv({ rowBookingList: bodyRows })
        const { group, individual } = countByBookingType({ bookingList })
        res.status(201).json({
            data: {
                bookingList,
                tents: group + Math.ceil(individual / 5)
            }
        })
    } catch (error) {
        if (error instanceof ReferenceError || error instanceof SyntaxError || error instanceof TypeError) {
            return next(createError.InternalServerError())
        }
        return next({
            errors: error.errors,
            message: error.message
        })
    }
}
