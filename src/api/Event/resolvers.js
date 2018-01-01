import DataLoader from 'dataloader';
import { Op } from 'sequelize';

export const Query = {
  getPageOfEvents: (_, { page, perPage, sortField, sortOrder, /* filter */ }, { connector }) => {
    const parameters = {
      offset: page * perPage,
      limit: perPage,
      order: sortField && [[sortField, sortOrder]],
    };
    
    return connector.Event.findAndCountAll(parameters).then(({ count, rows }) => ({
      items: rows,
      totalCount: count,
    }));
  },

  getEvent: (_, { id }, { connector }) =>
    connector.Event.find({ where: { id } }),
};

export const Mutation = {
  createEvent: (_, { data }, { connector }) => connector.Event.create(
    JSON.parse(data)
  ),

  updateEvent: async (_, { data }, { connector }) => {
    const event = JSON.parse(data);
    await connector.Event.update(event, { where: { id: event.id } });

    return connector.Event.find({
      where: { id: event.id },
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
