import gql from 'graphql-tag';
import pluralize from 'pluralize';

import {
    CREATE,
    UPDATE,
} from 'admin-on-rest';

export default {
    [CREATE]: {
        operationName: resourceType => `creatde${resourceType.name}`,
        getParameters: params => ({ input: params.data }),
        query: (operationName, fields) => {
            console.log('FFFFFFF')
            return gql`
            mutation ${operationName}($input: ${resourceType.name}Input!) {
                ${operationName}(input: $input) {
                    ${fields}
                }
            }
        `;},
        parseResponse: (response, resource, apolloParams) => {
            const { data } = response;
            const dataKey = getApolloResultKey(CREATE, apolloParams);

            return { data: data[dataKey] };
        },
    },
};