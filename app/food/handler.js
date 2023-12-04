const {
  validateGetFoodSchema,
} = require("../../validator/food");

const foodsServices = require("../../services/foodService");

const handlerGetFood = async (req, res, next) =>  {
  try {
    const { name, probability } = req.body;

    validateGetFoodSchema({probability});

    const food = await foodsServices.getFood(name);

    res.status(200).json({
      status: "success",
      message: "Successfully Find Food",
      data: {
        food
      },
    });

  } catch (err) {
    next(err);
  }
}

module.exports = {
  handlerGetFood,
}