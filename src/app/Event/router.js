import { Router } from 'express';

import { Event, Ad } from '../connector';
import requireParamsHandler from '../../handlers/requireParamsHandler';
import asyncHandler from '../../handlers/asyncHandler';
import requireAuthHandler from '../../handlers/requireAuthHandler';

const getCurrentEvent = () =>
  Event.findOne({
    where: { open: true },
  });

const eventRouter = Router();

eventRouter.get(
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

eventRouter.use('/current/ads', requireAuthHandler);

eventRouter
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
    requireParamsHandler({
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

export default eventRouter;
