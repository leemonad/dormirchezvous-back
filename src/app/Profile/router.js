import { Router } from 'express';

import asyncHandler from '../../handlers/asyncHandler';
import requireAuthHandler from '../../handlers/requireAuthHandler';

const configureRouter = () => {
  const router = Router();
  router
    .route('/')
    .all(requireAuthHandler)
    .get((req, res) => res.send(req.user))
    .patch(
      asyncHandler(async (req, res) => {
        const values = {};
        const { name, contactInfo } = req.body;
        if (name) values.name = name;
        if (contactInfo) values.contactInfo = contactInfo;

        await req.user.update(values);

        res.send(req.user);
      }),
    );
  return router;
};

export default configureRouter;
