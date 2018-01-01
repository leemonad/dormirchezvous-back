import { BaseSchema } from '../schema';
import AdSchema from '../Ad/schema';

const EventSchema = `
    type Event {
        id: ID
        title: String!
        description: String!
        open: Boolean
        ads: [Ad]
    }

    type EventPage {
        items: [Event]
        totalCount: Int
    }

    extend type Query {
        getPageOfEvents(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: String): EventPage
        getEvent(id: ID!): Event
    }

    extend type Mutation {
        createEvent(data: String!): Event
        updateEvent(data: String!): Event
        deleteEvent(id: ID!): Boolean
    }
`;

export default () => [EventSchema, AdSchema, BaseSchema];
