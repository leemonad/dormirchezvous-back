const Sequelize = require('sequelize');

const config = require('../config');

const AdModel = require('./Ad/model');
const CandidacyModel = require('./Candidacy/model');
const EventModel = require('./Event/model');
const UserModel = require('./User/model');

const connector = new Sequelize({
  dialect: 'mysql',
  host: config.get('database.host'),
  port: config.get('database.port'),
  database: config.get('database.name'),
  username: config.get('database.user'),
  password: config.get('database.password'),
  operatorsAliases: Sequelize.Op,
});

// Models

const Ad = connector.define('ad', AdModel);
const Candidacy = connector.define('candidacy', CandidacyModel);
const Event = connector.define('event', EventModel);
const User = connector.define('user', UserModel);

// Relations

Candidacy.belongsTo(Ad);
Ad.belongsTo(Event);
Event.hasMany(Ad);
User.hasMany(Candidacy, { as: 'Candidacies' });
User.hasMany(Ad);

exports.Ad = connector.models.ad;
exports.Candidacy = connector.models.candidacy;
exports.Event = connector.models.event;
exports.User = connector.models.user;

module.exports = connector;










