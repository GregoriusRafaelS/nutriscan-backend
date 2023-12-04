'use strict';

const dataFoods = require('../data/foods.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foods', dataFoods, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('foods', null, {});
  }
};
