const jwt = require("jsonwebtoken");

function authenticationToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) next(new Error("Invalid Authentication"));

    let token;
    if (authHeader && authHeader.startsWith("Bearer")) token = authHeader.split(" ")[1];
    if (!token) {
      const error = new Error("Token is required");
      error.statusCode = 401;
      next(error)
    };

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, { algorithms: ['HS256'] }, function(err, decoded) {
        if (err) {
          const error = new Error(err.message);
          error.statusCode = 401;
          return next(error)
        }

        const user = {
          id: decoded.id,
        };

        req.user = user;
        next();
    });

    // if (!decodedToken) {
    //   const error = new Error("Token is");
    //   error.statusCode = 401;
    //   next(error)
    // };
}

module.exports = authenticationToken;