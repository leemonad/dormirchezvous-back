const { Router } = require('express');
const requireAuth = require('../middleware/requireAuth');
const { asyncHandler } = require('./utils');

const configureRouter = () => {
  const router = Router();
  router
    .route('/')
    .all(requireAuth)
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

module.exports = configureRouter;
