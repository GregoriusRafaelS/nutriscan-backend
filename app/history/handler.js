const { validateAddFoodHistorySchema } = require("../../validator/history");

const foodHistoryServices = require("../../services/foodHistoryService");

const handlerAddFoodHistory = async (req, res, next) => {
  try {
    const id_user = req.user.id;
    const { id_food, comments }  = req.body;

    validateAddFoodHistorySchema(req.body);
    
    await foodHistoryServices.addFoodHistory({id_user, id_food, comments});
    
    res.status(200).json({
      status: "success",
      message: "Successfully Add History Food",
    });
  } catch (err) {
    next(err);
  }
}

const handlerGetAllFoodHistory = async (req, res, next) => {
  try {
    const id_user = req.user.id;
    const foodHistory = await foodHistoryServices.getAllHistory(id_user);

    res.status(200).json({
      status: "success",
      message: "Successfully Get All Article",
      data: foodHistory,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handlerAddFoodHistory,
  handlerGetAllFoodHistory,
}