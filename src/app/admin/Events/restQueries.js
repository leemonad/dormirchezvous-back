import gql from 'graphql-tag';

export default {
    GET_LIST: gql`
        query EventPage($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: String) {
            EventPage(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter: $filter) {
                items {
                    id
                    title
                    description
                }
                totalCount
            }
        }
    `,
};