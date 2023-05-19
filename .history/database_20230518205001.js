const { Sequelize } = require('sequelize');

module.exports = new Sequelize('doublevpartnersDB', 'test', '123123', {
    host: 'localhost',
    dialect: 'mysql'
});
MYSQL_ROOT_PASSWORD: doublevpartners
MYSQL_DATABASE: doublevpartnersDB
MYSQL_USER: test
MYSQL_PASSWORD: 123123