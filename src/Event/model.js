import Sequelize from 'sequelize';

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

export default Event;