/* eslint-disable array-callback-return */
const { createReadStream, unlinkSync } = require('fs')
const crypto = require('crypto')
// const createError = require('http-errors')
const { parse } = require('csv-parse')

exports.readAndParseFile = async ({ filePath }) => {
    return new Promise((resolve, reject) => {
        const bookingList = []
        createReadStream(filePath)
            .pipe(parse({ delimiter: ':' }))
            .on('data', function (row) {
                if (row.join().trim() !== '') {
                    bookingList.push(row)
                }
            })
            .on('end', function () {
                resolve(bookingList)
                unlinkSync(filePath)
            })
            .on('error', (err) => {
                reject(err)
            })
    })
}

exports.parseCsv = ({ rowBookingList }) => {
    return rowBookingList.map(element => {
        if (element.join() !== '') {
            const [, username, bookingType] = element.join().trim().toLowerCase().replace(/\s+/g, '').split(',')
            return {
                id: crypto.randomBytes(3).toString('hex'),
                username,
                bookingType
            }
        }
    })
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
