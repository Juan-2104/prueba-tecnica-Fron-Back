const Sequelize = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'myuser', 'mysecretpassword', {
    host: 'db',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

console.log({ sequelize })

module.exports = sequelize;
