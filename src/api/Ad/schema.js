import { BaseSchema } from '../schema';

const AdSchema = `
    type Ad {
        id: ID
        title: String
        description: String
        availableSpots: Int
    }

    type AdPage {
        items: [Ad]
        totalCount: Int
    }

    extend type Query {
        getPageOfAds(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: String): AdPage
        getAd(id: ID!): Ad
    }

    extend type Mutation {
        createAd(data: String!): Ad
        updateAd(data: String!): Ad
        deleteAd(id: ID!): Boolean
    }
`;

export default () => [AdSchema, BaseSchema];
