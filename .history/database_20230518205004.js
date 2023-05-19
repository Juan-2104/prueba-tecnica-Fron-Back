const { Sequelize } = require('sequelize');

module.exports = new Sequelize('doublevpartnersDB', 'test', '123123', {
    host: 'localhost',
    dialect: 'mysql'
});