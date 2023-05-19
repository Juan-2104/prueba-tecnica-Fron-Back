const { Sequelize } = require('sequelize');

module.exports = new Sequelize('doublevpartnersDB', 'test', 'doublevpartnersDB', {
    host: 'localhost',
    dialect: 'mysql'
});
