const createModelUser = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    "User",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
      username:{
        type: DataTypes.STRING,
        allowNull: false
      },
      fullName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      age:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      gender:{
        type: DataTypes.ENUM("Male", "Female"),
        allowNull: false
      },
      profilePicture:{
        type: DataTypes.TEXT,
        allowNull: true
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
      tableName: "users",
    }
  );
  return User;
}

module.exports = createModelUser;