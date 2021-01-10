const expressJwt = require('express-jwt');

module.exports = {
    // express-jwt handles decoding and checking the signature of our tokens for us
    // And nicely sticks the user in the request.
    isAuthenticated: expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })
};