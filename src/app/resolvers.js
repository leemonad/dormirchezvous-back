import { Query as AdQuery, Mutation as AdMutation } from './Ad/resolvers';

import {
  Event,
  Query as EventQuery,
  Mutation as EventMutation,
} from './Event/resolvers';

export default {
  Query: {
    ...AdQuery,
    ...EventQuery,
  },
  Mutation: {
    ...AdMutation,
    ...EventMutation,
  },
  Event,
};
