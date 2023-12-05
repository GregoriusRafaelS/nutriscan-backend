
const associationDB = (sequelize) => {
  const { User, Authentications, FoodHistory, Food } = sequelize.models;

  User.hasMany(Authentications, {
    foreignKey: "id_user",
    sourceKey: 'id',
  });
  Authentications.belongsTo(User, {
    foreignKey: "id_user",
    targetKey: 'id'
  });
  
  User.hasMany(FoodHistory, {
    foreignKey: "id_user",
    sourceKey: 'id',
  });
  FoodHistory.belongsTo(User, {
    foreignKey: "id_user",
    targetKey: 'id'
  });
  
  Food.hasMany(FoodHistory, {
    foreignKey: "id_food",
    sourceKey: 'id',
  });
  FoodHistory.belongsTo(Food, {
    foreignKey: "id_food",
    targetKey: 'id'
  });
}

module.exports = associationDB;