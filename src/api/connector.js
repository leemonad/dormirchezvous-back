import Sequelize from 'sequelize';

import config from '../../config';
import AdModel from './Ad/model';
import CandidacyModel from './Candidacy/model';
import EventModel from './Event/model';
import UserModel from './User/model';

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

export const Ad = connector.define('ad', AdModel);
export const Candidacy = connector.define('candidacy', CandidacyModel);
export const Event = connector.define('event', EventModel);
export const User = connector.define('user', UserModel);

// Relations

Candidacy.belongsTo(Ad);
Ad.belongsTo(Event);
Event.hasMany(Ad);
User.hasMany(Candidacy, { as: 'Candidacies' });
User.hasMany(Ad);

export default connector;
