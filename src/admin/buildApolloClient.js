import { buildApolloClient } from 'aor-simple-graphql-client';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default () => buildApolloClient({
    client: new ApolloClient({
        link: new HttpLink({ uri: '/api/graphql' }),
        cache: new InMemoryCache(),
    }),
});