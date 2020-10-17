const tokenConfig = () => {
    // Getting the token from local storage
    var token = localStorage.getItem('token')
    var config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    // If there is a token
    if (token) {
        config.headers['auth-token'] = token
    }
    return config;
}
module.exports = tokenConfig;