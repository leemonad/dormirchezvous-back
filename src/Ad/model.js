const Sequelize = require('sequelize');

const Ad = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    availableSpots: Sequelize.INTEGER,
};

module.exports = Ad;