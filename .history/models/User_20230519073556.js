const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

(async () => {
    await sequelize.sync();
})();

module.exports = User;
