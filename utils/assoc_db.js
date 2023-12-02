const { User, Authentications } = sequelize.models;

const associationDB = (sequelize) => {
  User.hasMany(Authentications, {
    foreignKey: "id_user",
    sourceKey: 'id',
  });
  Authentications.belongsTo(User, {
    foreignKey: "id_user",
    targetKey: 'id'
  });
}

module.exports = associationDB;