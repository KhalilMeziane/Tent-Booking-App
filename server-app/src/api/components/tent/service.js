const { createReadStream } = require('fs')
const { parse } = require('csv-parse')

exports.readAndParseFile = async ({ filePath }) => {
    return new Promise((resolve, reject) => {
        const bookingData = []
        createReadStream(filePath)
            .pipe(parse({ delimiter: ':' }))
            .on('data', function (row) {
                bookingData.push(row)
            })
            .on('end', function () {
                resolve(parseCsv({ data: bookingData }))
            })
            .on('error', (err) => {
                reject(err)
            })
    })
}

const parseCsv = ({ data }) => {
    const [, ...restRows] = data
    const parsedData = []
    restRows.forEach(element => {
        if (element.join() !== '') {
            const val = element.join().trim().toLowerCase().replace(/\s+/g, '').split(',')
            parsedData.push(new Booking(...val))
        }
    })
    return parsedData
}

function Booking (id, username, type) {
    this.id = id
    this.userName = username
    this.bookingType = type
}
