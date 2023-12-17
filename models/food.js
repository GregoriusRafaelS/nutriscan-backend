'use strict';

const createModelFood = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    "Food",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      protein: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      carbohydrates: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "foods",
    }
  );
  return User;
}

module.exports = createModelFood;