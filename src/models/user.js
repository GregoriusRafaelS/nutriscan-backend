const Sequelize = require("sequelize");
const my_db = require('../utils/connect_db');

const User = my_db.define("users",{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  },
  username:{
    type: Sequelize.STRING,
    allowNull: false
  },
  fullName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  age:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  gender:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  profilePicture:{
    type: Sequelize.TEXT,
    allowNull: true
  },
});

module.exports = User;