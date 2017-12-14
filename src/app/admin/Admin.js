import React, { Component } from 'react';

import { Admin as AorAdmin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';

import buildApolloClient from './buildApolloClient';
import EventsList from './Events/EventsList';

class Admin extends Component {
    constructor() {
        super();

        this.state = { restClient: null };
    }

    componentDidMount() {
        // We are using state here because the apollo client initialization is asynchronous
        
        buildApolloClient().then((restClient) => {
            this.setState({ restClient })
        });
    }

    render() {
        const { restClient } = this.state;

        if (!restClient) {
            return <div>Loading</div>;
        }

        return (
            <AorAdmin restClient={restClient}>
                <Resource
                    name="Events"
                    list={EventsList}
                    edit={undefined}
                    create={undefined}
                    remove={Delete}
                />
            </AorAdmin>
        );
    }
}

export default Admin;