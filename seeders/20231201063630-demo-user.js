'use strict';

const DataUsers = require("../data/users.json");
const bcrypt = require("bcrypt");

const hashedDataUsersPromises  = async () => {
  const hashedDataUsersPromises = DataUsers.map(async (DataUser) => {
    DataUser.password = await bcrypt.hash(DataUser.password, 10);
    DataUser.createdAt = new Date();
    DataUser.updatedAt = new Date();
    return DataUser;
  });

  const hashedDataUsers = await Promise.all(hashedDataUsersPromises);
  return hashedDataUsers;
};

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', await hashedDataUsersPromises() , {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
