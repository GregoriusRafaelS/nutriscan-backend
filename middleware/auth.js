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

  jwt.verify(token, process.env.TOKEN_SECRET_KEY, { algorithms: ['HS256'] },
  (error, decoded) => {
    if (error) {
      let customError;
      if (error.name === 'TokenExpiredError') {
        customError = new Error("Token is expired");
        customError.statusCode = 401;
      } else {
        customError = new Error("Invalid Token");
        customError.statusCode = 401;
      }
      return next(customError);
    }

    req.user = {
      id: decoded.id,
    };
    next();
  }
);

}

module.exports = authenticationToken;