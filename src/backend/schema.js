import { makeExecutableSchema } from 'graphql-tools';

import AdSchema from './Ad/schema';
import EventSchema from './Event/schema';
import resolvers from './resolvers';

export const BaseSchema = () => [
  `
    type Query {
        dummy: Boolean
    }

    type Mutation {
        dummy: Boolean
    }
`,
];

export default makeExecutableSchema({
  typeDefs: [BaseSchema, AdSchema, EventSchema],
  resolvers,
});
