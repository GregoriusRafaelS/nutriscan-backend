
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../../utils/generateToken");

const handleTokenRefresh = (req, res, next) => {
    const { refreshToken } = req.body

    if (!refreshToken) {
        res.status(401).json({
            status: "error", 
            message: "refresh token is empty"
        })
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY, { algorithms: ['HS256'] }, function(err, decoded) {
        if (err) {
          const error = new Error(err.message);
          error.statusCode = 401;
          return next(error)
        }

        const user = {
          id: decoded.id,
          email: decoded.email,
        };

        newAccessToken = generateAccessToken(user)

        res.status(201).json({
            status: "success", 
            data: {
                user: {
                    accessToken: newAccessToken,
                    refreshToken: refreshToken, 
                }
            }
        })
    });
}

module.exports = handleTokenRefresh