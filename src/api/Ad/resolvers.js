export const Query = {
  getPageOfAds: (_, { page, perPage, sortField, sortOrder, /* filter */ }, { connector }) => {
    const parameters = {
      offset: page * perPage,
      limit: perPage,
      order: sortField && [[sortField, sortOrder]],
    };
    
    return connector.Ad.findAndCountAll(parameters).then(({ count, rows }) => ({
      items: rows,
      totalCount: count,
    }));
  },

  getAd: (_, { id }, { connector }) => connector.Ad.find({ where: { id } }),
};

export const Mutation = {
  createAd: (_, { data }, { connector }) =>
    connector.Ad.create({
      ...JSON.parse(data),
      //userId: 10, // TODO, use real value (req.user.id)
    }),

  updateAd: async (_, { data }, { connector }) => {
    const ad = JSON.parse(data);
    await connector.Ad.update(ad, { where: { id: ad.id } });

    return connector.Ad.find({ where: { id: ad.id } });
  },

  deleteAd: async (_, { id }, { connector }) => {
    await connector.Ad.destroy({ where: { id } });
    return true;
  },
};
