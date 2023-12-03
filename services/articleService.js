const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const { Article, sequelize } = require("../models");

const postArticle = async (data) => {
  const article = await Article.create({
    title: data.title,
    content: data.content,
    tag: data.tag
  });
  return article;
}

const getAllArticle = async () => {
  const articles = await Article.findAll({
    order: sequelize.col("updatedAt")
  });
  return articles;
}

module.exports = {
  postArticle,
  getAllArticle,
}