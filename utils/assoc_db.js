const my_db = require('./connect_db');
const user = require('../models/user')


const association = async () => {
  try {
    await my_db.sync({force: false});
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = association;