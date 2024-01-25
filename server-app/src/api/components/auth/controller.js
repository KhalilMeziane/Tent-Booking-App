exports.login = (req, res, next) => {
    try {
        res.status(200).json({
            message: 'login'
        })
    } catch (error) {
        console.log('error: ', error)
    }
}
