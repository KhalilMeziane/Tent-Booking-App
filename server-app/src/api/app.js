const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const createError = require('http-errors')
const swaggerUi = require('swagger-ui-express')

const { morganMiddleware } = require('../config')
const routes = require('./routes')
const { apiDocumentation } = require('./docs/apiDoc')

const app = express()

require('dotenv').config()

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    handler: (req, res) => {
        return res.status(429).json({
            error: 'You sent too many requests. Please wait a while then try again'
        })
    }
})
app.use('/api', apiLimiter)

app.use(helmet())

app.use(cors())

app.use(morganMiddleware)

app.use(express.json())

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is up and running'
    })
})

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation))

app.use('/api', routes)

app.use((req, res, next) => {
    next(createError.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            errors: err.errors
        }
    })
})

module.exports = app
