const jwt = require("jsonwebtoken");

function generateAccessToken(userPayload) {
    return jwt.sign(userPayload, process.env.TOKEN_SECRET_KEY, {
      algorithm: "HS256",  
      expiresIn: "5m",
    });
}

module.exports = generateAccessToken;