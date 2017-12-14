import DataLoader from 'dataloader';
import { Op } from 'sequelize';

export const Query = {
  EventPage: (_, { /* Handle pagination ... here */ }, { connector }) => (
    connector.Event.findAndCountAll({
        offset: 0,
        limit: 10,
    })
    .then(({ count, rows }) => ({
      items: rows,
      totalCount: count,
    }))
  ),

  Event: (_, { id }, { connector }) =>
    connector.Event.find({
      where: { id },
    }),
};

export const Mutation = {
  createEvent: (_, { input }, { connector }) => connector.Event.create(input),

  updateEvent: async (_, { id, input }, { connector }) => {
    await connector.Event.update(input, { where: { id } });

    return connector.Event.find({
      where: { id },
    });
  },

  deleteEvent: async (_, { id }, { connector }) => {
    await connector.Event.destroy({ where: { id } });
    return true;
  },
};

export const Event = {
  ads: ({ id }, _, { dataloaders }) => dataloaders.adsByEventId.load(id),
};
