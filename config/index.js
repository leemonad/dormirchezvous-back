var convict = require('convict');

var config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  session_secret: {
    doc: 'The session secret',
    format: String,
    default: '',
    env: 'SESSION_SECRET',
  },
  database: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'database',
      env: 'MYSQL_HOST',
    },
    port: {
      doc: 'Database port',
      format: 'Number',
      default: 3306,
      env: 'MYSQL_PORT',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'dormirchezvous',
      env: 'MYSQL_DATABASE',
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'root',
      env: 'MYSQL_USER',
    },
    password: {
      doc: 'Database password',
      format: String,
      default: 'root',
      env: 'MYSQL_PASSWORD',
    }
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;