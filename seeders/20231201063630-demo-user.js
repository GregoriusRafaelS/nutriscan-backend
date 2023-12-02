'use strict';

const DataUsers = require("../data/users.json");
const DataAdmin = require("../data/admin");

const bcrypt = require("bcrypt");

const hashedDataPromises  = async (Datas) => {
  const hashedDataPromises = Datas.map(async (Data) => {
    Data.password = await bcrypt.hash(Data.password, 10);
    Data.createdAt = new Date();
    Data.updatedAt = new Date();
    return Data;
  });

  const hashedData = await Promise.all(hashedDataPromises);
  return hashedData;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [...await hashedDataPromises(DataAdmin), ...await hashedDataPromises(DataUsers)], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
