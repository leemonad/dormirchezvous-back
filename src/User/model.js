const Sequelize = require('sequelize');

const User = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    contactInfo: Sequelize.STRING,
};

module.exports = User;