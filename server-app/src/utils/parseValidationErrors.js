exports.parseValidationErrors = ({ errors }) => {
    const errorRecord = {}
    errors.reverse().forEach((error) => {
        const field = error.path
        const message = error.message
        if (!errorRecord[field]) {
            errorRecord[field] = message
        }
    })
    return errorRecord
}
