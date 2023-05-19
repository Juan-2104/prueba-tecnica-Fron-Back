const { Sequelize } = require('sequelize');

module.exports = new Sequelize('wordpress', 'wordpress', 'wordpress', {
    host: 'localhost',
    dialect: 'mysql'
});
