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

module.exports = {
  getFood,
}