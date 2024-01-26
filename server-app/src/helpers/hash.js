const argon2 = require('argon2')
const createError = require('http-errors')

exports.hashPassword = async ({ password }) => {
    return new Promise((resolve, reject) => {
        return argon2.hash(password)
            .then(hash => {
                return resolve(hash)
            })
            .catch(() => {
                return reject(createError.InternalServerError())
            })
    })
}

exports.comparePassword = async function ({ hashPassword, password }) {
    return new Promise((resolve, reject) => {
        return argon2.verify(hashPassword, password)
            .then(check => {
                if (!check) {
                    return resolve({ check: false })
                } else {
                    return resolve({ check: true })
                }
            })
            .catch(() => {
                return reject(createError.InternalServerError())
            })
    })
}
