const jwt = require('jsonwebtoken')
const config = require('config')
// A middleware function to verify the token.
const verifyToken = (req, res, next) => {
    const token = req.headers['auth-token']
    try {
        let decoded = jwt.verify(token, config.get('secretKey'))
        req.token = decoded
        next()
    } catch (err) {
        res.status(401).json(err)
    }
}
module.exports = verifyToken
