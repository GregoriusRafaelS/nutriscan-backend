const { Food, FoodHistory, sequelize } = require("../models");

const addFoodHistory = async ({id_user, id_food, comments}) => {
  const currentFood = await Food.findOne({
    where:{
      id: id_food
    }
  });

  if(!currentFood){
    const error = new Error("Food Does not exists");
    error.statusCode = 401;
    throw error;
  }
  await FoodHistory.create({
    id_user,
    id_food,
    comments
  });
}

const getAllHistory = async (id_user) => {
  const history = await FoodHistory.findAll({
    where: {
      id_user
    },
    include: {
      model: Food,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    attributes: { exclude: ["id_user", "createdAt"] },
    order: sequelize.col("updatedAt"),
  });
  
  return history;  
}


module.exports = {
  addFoodHistory,
  getAllHistory,
}