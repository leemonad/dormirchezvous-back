const Sequelize = require('sequelize');

const Candidacy = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message: Sequelize.TEXT,
}

module.exports = Candidacy;