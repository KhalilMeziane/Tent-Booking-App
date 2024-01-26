exports.findUser = ({ email }) => {
    const existingUser = {
        email: process.env.ROOT_EMAIL,
        password: process.env.ROOT_PASSWORD
    }

    if (existingUser.email !== email) {
        return null
    } else {
        return existingUser
    }
}
