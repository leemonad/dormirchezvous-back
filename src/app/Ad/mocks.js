import casual from 'casual';

export const Ad = (_, { id }) => ({
  id: id || casual.integer(0, 10),
  title: () => casual.title,
  description: () => casual.sentence,
});

export const Ads = () =>
  Array(3)
    .fill(1)
    .map(() => Ad(null, {}));

export const createAd = (_, { input }) => input;

export const updateAd = (_, { id, input }) => ({
  id,
  ...input,
});

export const deleteAd = () => true;

export default {
  Query: () => ({
    Ads,
    Ad,
  }),
  Mutation: () => ({
    createAd,
    updateAd,
    deleteAd,
  }),
};
