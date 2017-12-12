export const Query = {
  Ads: (_, where, { connector }) => connector.Ad.find({ where }),
  Ad: (_, { id }, { connector }) => connector.Ad.find({ where: { id } }),
};

export const Mutation = {
  createAd: (_, { eventId, input }, { connector }) =>
    connector.Ad.create({
      ...input,
      eventId,
      //userId: 10, // TODO, use real value (req.user.id)
    }),

  updateAd: async (_, { id, input }, { connector }) => {
    await connector.Ad.update(input, { where: { id } });
    return connector.Ad.find({ where: { id } });
  },

  deleteAd: async (_, { id }, { connector }) => {
    await connector.Ad.destroy({ where: { id } });
    return true;
  },
};
