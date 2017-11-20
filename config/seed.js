const { seedingData } = require('./config');
const { db, Event } = require('../src/models');

db
  .sync({ force: true })
  .then(() =>
    db.transaction(transaction =>
      Promise.all(
        seedingData.events.map(eventData =>
          Event.create(eventData, { transaction }),
        ),
      ),
    ),
  )
  .then(() => {
    process.exit(0);
  })
  .catch(console.error);
