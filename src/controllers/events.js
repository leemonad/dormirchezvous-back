const { Router } = require('express');
const requireAuth = require('../middleware/requireAuth');
const requireParams = require('../middleware/requireParams');
const { asyncHandler } = require('./utils');

const configureRouter = (Event, Ad) => {
  const getCurrentEvent = () =>
    Event.findOne({
      where: { open: true },
    });

  const router = Router();

  router.get(
    '/current',
    asyncHandler(async function currentEvent(req, res) {
      const event = await getCurrentEvent();

      res.send({
        id: event.id,
        title: event.title,
        description: event.description,
      });
    }),
  );

  router.use('/current/ads', requireAuth);
  router
    .route('/current/ads')
    .get(
      asyncHandler(async function listAds(req, res) {
        const event = await Event.findOne({
          where: { open: true },
          include: [ Ad ],
        });
        res.send(event.ads);
      }),
    )
    .post(
      requireParams({
        title: { type: String },
        description: { type: String },
        availableSpots: { type: Number },
      }),
      asyncHandler(async function createAd(req, res) {
        const { title, description, availableSpots } = req.body;
        const event = await getCurrentEvent();

        let ad = await Ad.findOne({
          where: {
            userId: req.user.id,
            eventId: event.id,
          },
        });
        if (ad) {
          await ad.update({
            title,
            description,
            availableSpots,
          });
        } else {
          ad = await Ad.create({
            title,
            description,
            availableSpots,
            eventId,
            userId: req.user.id,
          });
        }

        res.send(ad);
      }),
    );

  return router;
};

module.exports = configureRouter;
