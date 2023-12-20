'use strict';

const createModelAuthentications = (Sequelize, DataTypes) => {
  const Authentications = Sequelize.define(
    "Authentications",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
      refreshToken:{
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    },
    {
      tableName: "authentications",
    }
  );
  return Authentications;
}

module.exports = createModelAuthentications;