import Sequelize from 'sequelize';

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

export default User;
