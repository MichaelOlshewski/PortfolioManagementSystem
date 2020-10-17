const User = require('../../models/User')

module.exports = (app) => {
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const { firstName, lastName, email, password} = body;

        if (!firstName) {
            return res.send({
                success: false,
                message: "Error: First Name cannot be blank."
            })
        }

        if (!lastName) {
            return res.send({
                success: false,
                message: "Error: Last Name cannot be blank."
            })
        }

        if (!email) {
            return res.send({
                success: false,
                message: "Error: Email cannot be blank."
            })
        }

        if (!password) {
            return res.send({
                success: false,
                message: "Error: Password cannot be blank."
            })
        }

        if (password < 8) {
            return res.send({
                sucess: false,
                message: "Error: Password must be greater than 8 characters!"
            })
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                res.end({
                    success: false,
                    message: "Error: Server Error"
                })
            } else if (previousUsers.length > 0) {
                res.end({
                    sucess: false,
                    message: "Error: Account already exists."
                })
            }

            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password)
            newUser.save((err, user) => {
                if (err) {
                    res.end({
                        sucess: false,
                        message: 'Error: Server error'
                    })
                }
                res.end({
                    success: true,
                    message: "Signed Up"
                })
            })
        })
    })
}