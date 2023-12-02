const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const { Article } = require("../models");

const postArticle = async (data, id_course, id_chapter) => {
  const article = await Article.create({
    title: data.title,
    content: data.content,
    tag: data.tag
  });
  return article;
}

module.exports = {
  postArticle,
}