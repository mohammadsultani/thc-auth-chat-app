const mongoose = require('mongoose')
// Defining Message schema 
const messageSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    text: { type: String, required: true }
}, {
    timestamps: true
})
// Constructing the model of message schema.
const messageModel = mongoose.model('Message', messageSchema)
// Exporting the message model.
module.exports = messageModel






