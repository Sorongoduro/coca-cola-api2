const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')

mongoose.Schema.Types.Number.cast(false)
mongoose.Schema.Types.String.cast(false)

const userSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: validator.isEmail,
        required: true
    },
    password: {
        type: String,
        // validate: validator.isStrongPassword,
        required: true
    }

})

const Users = mongoose.model('usuarios', userSchema)
module.exports = Users