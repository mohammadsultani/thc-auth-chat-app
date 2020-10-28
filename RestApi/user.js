const router = require('express').Router()
const userSchema = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken')
const config = require('config');
// Getting all the users
router.get('/', verifyToken, (req, res) => {
    userSchema.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
})
// Get a user by user userName when login
router.post('/login', async (req, res) => {
    try {
        const user = await userSchema.findOne({ userName: req.body.userName })
        // First, checking the user password with compare method
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                jwt.sign({ id: user._id }, config.get('secretKey'), { expiresIn: '2h' }, (err, token) => {
                    if (err) return res.status(400).json('Authentication Failed!')
                    res.json({ userName: user.userName, token })
                })
            }
            // Wrong password
            else return res.status(400).json('Invalid credential')
        })
    } catch (err) {
        res.status(400).json('User not found')
    }
})
// Creating a user
router.post('/signup', async (req, res) => {
    // Checks if the user exist
    const isExist = await userSchema.findOne({ userName: req.body.userName })
    // If yes then we throw an error.
    if (isExist) return res.status(400).json('User Already Exist!!')
    // If not exist then we create a new user
    // Hashing the password before saving it to the database.
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            const newUser = new userSchema({
                userName: req.body.userName,
                password: hash
            })
            newUser.save()
                .then(user => {
                    jwt.sign({ id: user._id }, config.get('secretKey'), { expiresIn: '2h' }, (err, token) => {

                        if (err) return res.status(400).json('Authentication Failed!')
                        res.json({ token, user: user.userName })
                    })
                })
                .catch(err => res.status(400).json(err))
        })
    })
})
// Deleting a user 
router.delete('/delete/:id', verifyToken, (req, res) => {
    userSchema.findByIdAndDelete(req.params.id)
        .then(({ userName }) => res.json(`${userName} is Deleted`))
        .catch(err => res.status(400).json(err))
})

router.delete('/all', (req, res) => {
    userSchema.deleteMany()
        .then(() => res.json('deleted'))
        .catch(err => res.status(400).json(err))
})

module.exports = router
