const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('social', 'croot', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;