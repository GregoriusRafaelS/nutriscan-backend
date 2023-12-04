const { validateAddFoodHistorySchema } = require("../../validator/history");

const foodServices = require("../../services/foodHistoryService");

const handlerAddFoodHistory = async (req, res, next) => {
  try {
    const id_user = req.user.id;
    const { id_food, comments }  = req.body;

    validateAddFoodHistorySchema(req.body);
    
    await foodServices.addFoodHistory({id_user, id_food, comments});
    
    res.status(200).json({
      status: "success",
      message: "Successfully Add History Food",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handlerAddFoodHistory,
}