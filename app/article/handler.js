const articlesServices = require("../../services/articleService");

const {
  validateArticleSchema,
} = require("../../validator/article");

const handlerPostArticle = async (req, res, next) => {
  try {
    validateArticleSchema(req.body);
    
    const article = await articlesServices.postArticle(req.body);
    res.status(201).json({
      status: "success",
      message: "Successfully post Article",
      data: article,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  handlerPostArticle,
}