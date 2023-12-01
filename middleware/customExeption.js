function customExeption(error, req, res, next) {
  res.status(400).json({
    status: "error",
    message: error.message,
  });
}

module.exports = customExeption;
