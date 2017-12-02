const Sequelize = require('sequelize');
const config = require('../config');

const db = new Sequelize({
  dialect: 'mysql',
  host: config.get('database.host'),
  port: config.get('database.port'),
  database: config.get('database.name'),
  username: config.get('database.user'),
  password: config.get('database.password'),
  operatorsAliases: Sequelize.Op,
});
exports.db = db;

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: Sequelize.STRING,
  name: Sequelize.STRING,
  contactInfo: Sequelize.STRING,
});
exports.User = User;

const Event = db.define(
  'event',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,
    open: Sequelize.BOOLEAN,
  }
);
exports.Event = Event;

const Ad = db.define('ad', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  availableSpots: Sequelize.INTEGER,
});
exports.Ad = Ad;

const Candidacy = db.define('candidacy', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: Sequelize.TEXT,
});
exports.Candidacy = Candidacy;

User.hasMany(Candidacy, { as: 'Candidacies' });
User.hasMany(Ad);
Event.hasMany(Ad)
Ad.belongsTo(Event);
Candidacy.belongsTo(Ad);
