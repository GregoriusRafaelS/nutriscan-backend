function customExeption(error, req, res, next) {
  res.status(error.statusCode).json({
    status: "error",
    message: error.message,
  });
}

module.exports = customExeption;
