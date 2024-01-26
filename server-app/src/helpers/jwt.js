const JWT = require('jsonwebtoken')
const createError = require('http-errors')

exports.signAccessToken = ({ email }) => {
    return new Promise((resolve, reject) => {
        const payload = { email }
        const options = { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        JWT.sign(payload, process.env.ACCESS_TOKEN_SECRET, options, (error, token) => {
            if (error) {
                reject(createError.InternalServerError())
            }
            resolve(token)
        })
    })
}

exports.verifyAccessToken = (accessToken) => {
    return new Promise((resolve, reject) => {
        JWT.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
            if (error) {
                return reject(createError.Unauthorized())
            }
            const { email } = payload
            resolve({ email })
        })
    })
}
