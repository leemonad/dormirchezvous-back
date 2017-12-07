import DataLoader from 'dataloader';
import { Op } from 'sequelize';

export const Query = {
  Events: (_, where, { connector }) => connector.Event.findAll({ where }),

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
