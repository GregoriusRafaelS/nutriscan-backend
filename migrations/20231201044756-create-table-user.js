'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gender:{
        type: Sequelize.ENUM("Male", "Female"),
        allowNull: false
      },
      profilePicture:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
