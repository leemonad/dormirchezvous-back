const { Router } = require('express');
const { asyncHandler } = require('./utils');

const configureRouter = Event => {
  const router = Router();

  router.get(
    '/current',
    asyncHandler(async (req, res, next) => {
      const event = await Event.findOne();
      res.send({
        id: event.id,
        title: event.title,
        description: event.description,
      });
    }),
  );

  return router;
};

module.exports = configureRouter;
