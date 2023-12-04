const { Food, FoodHistory } = require("../models");

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


module.exports = {
  addFoodHistory,
}