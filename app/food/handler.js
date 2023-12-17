const {
  validateGetFoodSchema,
} = require("../../validator/food");

const foodsServices = require("../../services/foodService");

const handlerGetDetailFoodProp = async (req, res, next) =>  {
  try {
    const { name, probability } = req.body;

    validateGetFoodSchema({probability});

    const food = await foodsServices.getFood(name);

    res.status(200).json({
      status: "success",
      message: "Successfully Find Food",
      data: food
    });

  } catch (err) {
    next(err);
  }
}

const handlerGetDetailFood = async (req, res, next) =>  {
  try {
    const { name } = req.query;

    const food = await foodsServices.getFood(name);

    res.status(200).json({
      status: "success",
      message: "Successfully Find Food",
      data: food
    });

  } catch (err) {
    next(err);
  }
}

const handlerGetAllFood = async (req, res, next) => {
  try {
    const { page, size, name } = req.query;
    const limit = size ? parseInt(size) : 3;
    const offset = page ? parseInt(page) * limit : 0;
    const nameFood = name ? name : "";

    const foods = await foodsServices.getAllFood(page, limit, offset, nameFood);

    res.status(200).json({
      status: "success",
      message: "Successfully Get All Data",
      data: foods,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handlerGetDetailFoodProp,
  handlerGetDetailFood,
  handlerGetAllFood,
}
