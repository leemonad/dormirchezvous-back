const Sequelize = require('sequelize');

const Event = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
    open: Sequelize.BOOLEAN,
};

module.exports = Event;