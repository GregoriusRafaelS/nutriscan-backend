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
      message: "Successfully Post Article",
      data: article,
    });
  } catch (err) {
    next(err);
  }
}

const handlerGetAllArticlePreview = async (req, res, next) => {
  try {
    const articles = await articlesServices.getAllArticle();

    res.status(201).json({
      status: "success",
      message: "Successfully Get All Article",
      data: articles,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handlerPostArticle,
  handlerGetAllArticlePreview,
}