const createError = require('http-errors')
const yup = require('yup')

const { comparePassword, signAccessToken } = require('../../../helpers')
const { parseValidationErrors } = require('../../../utils')
const { findUser } = require('./service')

const loginSchema = yup.object({
    email: yup.string().email().typeError('email field must be valid email').required('email field is required'),
    password: yup.string().typeError('password field must be string').required('password field is required')
})

exports.login = async (req, res, next) => {
    try {
        await loginSchema.validate(req.body, { abortEarly: false, strict: true })
        const { email, password } = req.body

        const user = findUser({ email })
        if (!user) {
            return next(createError.BadRequest('Invalid Credentials'))
        }

        const { check } = await comparePassword({ hashPassword: user.password, password })
        if (!check) {
            return next(createError.BadRequest('Invalid Credentials'))
        }

        const accessToken = await signAccessToken({ email: user.email })

        return res.status(200).json({
            message: 'login successful',
            accessToken
        })
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            const errors = parseValidationErrors({ errors: error.inner })
            return next({
                status: 400,
                message: 'Input validation failed',
                errors
            })
        }

        if (error instanceof ReferenceError || error instanceof SyntaxError || error instanceof TypeError) {
            return next(createError.InternalServerError())
        }

        return next({
            status: error.status || 500,
            errors: error.errors,
            message: error.message
        })
    }
}
