const mongoose = require('mongoose')
// Defining the user schema.
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 }
}, {
    timestamps: true
})
// Constructing the model of user schema.
const userModel = mongoose.model('User', userSchema)
// Exporting the user model.
module.exports = userModel
