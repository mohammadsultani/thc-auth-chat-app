const router = require('express').Router()
const messageSchema = require('../Models/Message')
const verifyToken = require("../middleware/verifyToken")
// Getting all the messages
router.get('/', verifyToken, (req, res) => {
    messageSchema.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json(err))
})
// Creating a message
router.post('/create', verifyToken, (req, res) => {
    const newMessage = new messageSchema({
        userName: req.body.userName,
        text: req.body.text
    })
    newMessage.save()
        .then(message => res.json(message))
        .catch(err => res.status(400).json(err))
})
// Deleting a message 
router.delete('/delete/:id', verifyToken, (req, res) => {
    messageSchema.findByIdAndDelete(req.params.id)
        .then(() => res.json('Message Deleted'))
        .catch(err => res.status(400).json(err))
})
//Deleting all the messages
router.delete('/', (req, res) => {
    messageSchema.deleteMany()
        .then(res => res.json('Deleted'))
        .catch(err => res.json(err))
})

module.exports = router

