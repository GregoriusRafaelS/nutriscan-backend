'use strict';

let dataFoods = require('../data/foods.json');

dataFoods.map((dataFood) => {
  dataFood.createdAt = new Date();
  dataFood.updatedAt = new Date();
})

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foods', dataFoods, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('foods', null, {});
  }
};
