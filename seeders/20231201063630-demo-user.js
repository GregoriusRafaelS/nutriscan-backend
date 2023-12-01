'use strict';

const DataUser = require("../data/users.json");

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', DataUser, {});
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
