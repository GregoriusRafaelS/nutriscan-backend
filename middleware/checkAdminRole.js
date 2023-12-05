const userService = require("../services/userService");

const checkAdminRole = async (req, res, next) => {
  const curentUser = await userService.getUser(req.user.id);
  
  if(curentUser.role == "Admin") return next();
  
  const error = new Error("You are Not Allowed to Access")
  error.statusCode = 403;
  next(error);
}

module.exports = checkAdminRole;