const { createReadStream, unlinkSync } = require('fs')
const crypto = require('crypto')
const { parse } = require('csv-parse')

exports.readAndParseFile = async ({ filePath }) => {
    return new Promise((resolve, reject) => {
        const bookingList = []
        createReadStream(filePath)
            .pipe(parse({ delimiter: ':' }))
            .on('data', function (row) {
                bookingList.push(row)
            })
            .on('end', function () {
                resolve(parseCsv({ bookingList }))
                unlinkSync(filePath)
            })
            .on('error', (err) => {
                reject(err)
            })
    })
}

const parseCsv = ({ bookingList }) => {
    const [, ...restRows] = bookingList
    const parsedBookingList = []
    restRows.forEach(element => {
        if (element.join() !== '') {
            const [, username, bookingType] = element.join().trim().toLowerCase().replace(/\s+/g, '').split(',')
            parsedBookingList.push({
                id: crypto.randomBytes(3).toString('hex'),
                username,
                bookingType
            })
        }
    })
    return parsedBookingList
}

exports.countByBookingType = ({ bookingList }) => {
    return bookingList.reduce((result, { bookingType }) => {
        result[bookingType] += 1
        return result
    }, {
        group: 0,
        individual: 0
    })
}
