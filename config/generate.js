const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const assert = require('assert');

const writeConfig = ({ sessionSecret, database = {} }) => {
  const config = {
    database: {
      host: database.host || 'localhost',
      port: database.port || 3306,
      name: database.name || 'dodo_insoumis',
      user: database.user || 'root',
      password: database.password || 'root',
    },
    session: {
      secret: sessionSecret,
    },
  };
  fs.writeFileSync(
    path.join(__dirname, 'config.json'),
    JSON.stringify(config, null, 2),
  );
};
if (process.env.NODE_ENV === 'development') {
  crypto.randomBytes(25, (err, bytes) => {
    const sessionSecret = bytes.toString('base64');
    writeConfig({
      sessionSecret,
    });
  });
} else if (process.env.NODE_ENV === 'production') {
  // express-session secret
  const sessionSecret = process.env.SESSION_SECRET;
  assert(sessionSecret, 'SESSION_SECRET env variable not set.');

  // Database
  const databaseHost = process.env.DATABASE_HOST;
  assert(databaseHost, 'DATABASE_HOST env variable not set.');
  const databasePort = process.env.DATABASE_PORT;
  assert(databasePort, 'DATABASE_PORT env variable not set.');
  const databaseName = process.env.DATABASE_NAME;
  assert(databaseName, 'DATABASE_NAME env variable not set.');
  const databaseUser = process.env.DATABASE_USER;
  assert(databaseUser, 'DATABASE_USER env variable not set.');
  const databasePassword = process.env.DATABASE_PASSWORD;
  assert(databasePassword, 'DATABASE_PASSWORD env variable not set.');

  writeConfig({
    sessionSecret,
    database: {
      name: databaseName,
      host: databaseHost,
      port: databasePort,
      user: databaseUser,
      password: databasePassword,
    },
  });
} else {
  throw new Error('Unidentified development environment.');
}
