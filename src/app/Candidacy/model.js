import Sequelize from 'sequelize';

const Candidacy = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: Sequelize.TEXT,
};

export default Candidacy;
