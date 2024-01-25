exports.tents = (req, res, next) => {
    try {
        res.status(200).json({
            message: 'tents'
        })
    } catch (error) {
        console.log('error: ', error)
    }
}
