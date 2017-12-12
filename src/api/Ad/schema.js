import { BaseSchema } from '../schema';

const AdSchema = `
    type Ad {
        id: Int
        title: String
        description: String
        availableSpots: Int
    }

    extend type Query {
        Ads(eventId: Int!, userId: Int): [Ad]
        Ad(id: Int!): Ad
    }

    input AdInput {
        title: String!
        description: String!
        availableSpots: Int
    }

    extend type Mutation {
        createAd(input: AdInput!, eventId: Int!): Ad
        updateAd(id: Int!, input: AdInput!): Ad
        deleteAd(id: Int!): Boolean
    }
`;

export default () => [AdSchema, BaseSchema];
