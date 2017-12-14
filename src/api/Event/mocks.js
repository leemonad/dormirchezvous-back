import casual from 'casual';

export const Event = (_, { id }) => ({
  id: () => id || casual.integer(0, 10),
  title: () => casual.title,
  description: () => casual.sentence,
  open: () => casual.boolean,
});

export const Events = (_, { open }) =>
  Array(3)
    .fill(1)
    .map((_, id) => ({
      ...Event(null, { id }),
      open: open !== undefined ? open : casual.boolean,
    }));

export default {
  Query: () => ({
    Events,
    Event,
  }),
};
