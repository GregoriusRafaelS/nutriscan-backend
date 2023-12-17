const Sequelize = require("sequelize");
const { Food, sequelize } = require("../models");

const getFood = async (name) => {
  const food = await Food.findOne({
    where: {
      name: name
    }
  })

  if(!food){
    const error = new Error("Food Does not exists");
    error.statusCode = 401;
    throw error;
  }

  return food;
}

const getAllFood = async (page, limit, offset, nameFood) => {
  const foods = await Food.findAndCountAll({
    where: {
      name: {
        [Sequelize.Op.like]: `%${nameFood}%`
      }
    },
    offset: offset,
    limit: limit,
    subQuery: false
  })

    if(!foods){
      const error = new Error("Food Does not exists");
      error.statusCode = 401;
      throw error;
    }
    
    const currentPage = page ? parseInt(page) : 0;
    const totalPages = Math.ceil(foods.count / limit);
    
    const response = {
      count: foods.count,
      foods: foods.rows,
      totalPages,
      currentPage,
    }
    return response;
}

module.exports = {
  getFood,
  getAllFood,
}