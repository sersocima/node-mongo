const User = require('../../models/User')

const UserController = {
    async createUser(req, res) {
        const bodyData = req.body
        console.log('controller ' + bodyData)
        try {
            const newUser = await User.create(bodyData)
            return res.status(201).json(newUser)
        } catch ( err ) {
            return res.status(400).json(err)
        }
    }
}

module.exports = UserController