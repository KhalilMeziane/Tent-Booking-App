const HTTP = require('http')
const chalk = require('chalk')

const app = require('./api/app')
const PORT = normalizePort(process.env.PORT || 4000)

app.set('port', PORT)

const server = HTTP.createServer(app)

server.listen(PORT, () => {
    if (process.env.Node_ENV === 'development') {
        console.log(`Host: ${chalk.bgBlue(`http://localhost:${PORT}`)}`)
        console.log(`API Documentation: ${chalk.bgMagenta(`http://localhost:${PORT}/api/documentation`)}`)
    }

    if (process.env.Node_ENV === 'production') {
        console.log('Running Server App in Production')
    }
})

function normalizePort (value) {
    const port = parseInt(value, 10)
    if (isNaN(port)) {
        return value
    }
    if (port >= 0) {
        return port
    }
    return false
}
