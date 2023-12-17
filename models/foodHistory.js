'use strict';

const createModelFoodHistory = (Sequelize, DataTypes) => {
  const FoodHistory = Sequelize.define(
    "FoodHistory",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_food: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "foods",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      comments: {
        type: DataTypes.TEXT
      },
      eatingTime: {
        allowNull: false,
        type: DataTypes.ENUM("Pagi", "Siang", "Sore", "Malam"),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      tableName: "food_histories",
    }
  );
  return FoodHistory;
}

module.exports = createModelFoodHistory;